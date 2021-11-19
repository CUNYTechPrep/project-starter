const env = require("dotenv").config();
const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");
const fetch = (...args) =>
	import("node-fetch").then(({ default: fetch }) => fetch(...args));
const req_method = { method: "GET" };
const { PrismaClientRustPanicError } = require("@prisma/client/runtime");
const { event, participant, user } = new PrismaClient();
const geolocation_key = process.env.GEO_KEY;
// see all events
router.get("/", async (req, res) => {
	try {
		const events = await event.findMany();
		return res.json(events);
	} catch (err) {
		console.log(err);
		return res.status(500).json(err);
	}
});
// see all non-expired events
router.get("/active", async (req, res) => {
	try {
		const events = await event.findMany({
			where: {
				event_end: { gt: new Date(Date.now()) },
			},
			orderBy:{
				event_start: 'asc'
			}
		});
		return res.json(events);
	} catch (err) {
		console.log(err);
		return res.status(500).json(err);
	}
});
// see past evemts
router.get("/past", async (req, res) => {
	try {
		const events = await event.findMany({
			where: {
				event_end: { lte: new Date(Date.now()) },
			},
			orderBy:{
				event_start: 'asc'
			}
		});
		return res.json(events);
	} catch (err) {
		console.log(err);
		return res.status(500).json(err);
	}
});
// host a event
router.post("/", async (req, res) => {
	let {
		event_name,
		event_desc,
		is_online,
		capacity,
		taken,
		event_address,
		event_city,
		event_state,
		event_country,
		event_zip,
		event_long,
		event_lat,
		event_start,
		event_end,
		event_image,
		event_past,
		require_vac,
		creator,
	} = req.body;
	try {
		// error checking for wrong dates
		if (new Date(event_start) < Date.now())
			throw { msg: "Start date and time has already past." };
		if (new Date(event_end) < Date.now())
			throw { msg: "End date and time has already past." };
		if (new Date(event_end) < new Date(event_start))
			throw { msg: "Event cannot end before it is started." };
		let query = [`https://api.geoapify.com/v1/geocode/search?text=`];
		let verify = [
			event_address,
			event_city,
			event_state,
			event_country,
			event_zip,
		];
		while (verify.length) {
			const curr = verify.pop();
			if (curr) query.push(curr.replace(/\s+/g, "%20"), "%20");
		}
		query.pop(); // removes the final '%20'
		query.push("&apiKey=");
		query.push(geolocation_key);
		query = query.join("");
		if (query !== "") {
			await fetch(query, req_method)
				.then((res) => res.json())
				.then((res) => {
					if (res.statusCode) throw { msg: res.message };
					event_long = String(res.features[0].properties.lon);
					event_lat = String(res.features[0].properties.lat);
				});
		}
		const createEvent = await event.create({
			data: {
				event_name,
				event_desc,
				is_online,
				capacity,
				taken,
				event_address,
				event_city,
				event_state,
				event_country,
				event_zip,
				event_long,
				event_lat,
				event_start,
				event_end,
				event_image,
				event_past,
				require_vac,
				creator,
			},
		});
		res.json(createEvent);
	} catch (err) {
		console.log(err);
		return res.status(500).json(err);
	}
});
// get all events that a user partipated in
router.get("/:event_id/partipants", async (req, res) => {
	try {
		const { event_id } = req.body;
		let user_ids = await participant.findMany({
			where: {
				event_id,
			},
			select:{
				user_id: true
			},
			orderBy:{
				createdAt: 'asc'
			}
		});
		user_ids = user_ids.map(user=>{
			return user.user_id;
		});
		// user_ids = user_ids.join(',');
		const users_info = await user.findMany({
			where:{
				user_id:{
					in: user_ids
				}
			}
		});
		return res.json(users_info);
	} catch (err) {
		console.log(err);
		return res.status(500).json(err);
	}
});

module.exports = router;
/*
{
    "event_title": "Testing event",
    "event_desc": "Testing, testing, testing 1 2 3",
    "is_online": false, // default false
    "capacity": 50, // opitional
    "taken": 45, // opitional
    // "hit_limit": Calculated by the backend code [BOOLEAN]
    "event_address": "65-30 Kissena Blvd",
    "event_city": "Queens",
    "event_state": "NY",
    "event_country": "United States",
    "event_zip": "11367",
    // "event_long": Calculated by Backend Code [DECIMAL]
    // "event_lat": Calculated by Backend Code [DECIMAL]
    // "past": default false, will be updated
    "event_start": "2021-11-17 13:30",
    "event_end": "2021-11-20 15:30",
    // "event_image":, Opitional [URL]
    // "event_past": Calculated by backend code [BOOLEAN]
    "require_vac": true,
    "creator": "1dc5cb06-beb4-4a36-ada0-cd3d49151dde"
}
*/
