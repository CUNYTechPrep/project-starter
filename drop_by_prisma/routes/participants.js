const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");

const { participant, event } = new PrismaClient();

router.get("/", async (req, res) => {
	try {
		const { participant_id } = req.body;
		const events = await participant.findMany({
			where: {
				participant_id,
			},
		});
		return res.json(events);
	} catch (err) {
		console.log(err);
		return res.status(500).json(err);
	}
});
// get all partipants of a event
router.get("/event", async (req, res) => {
	try {
		const { event_id } = req.body;
		const users = await participant.findMany({
			where: {
				event_id,
			},
		});
		return res.json(users);
	} catch (err) {
		console.log(err);
		return res.status(500).json(err);
	}
});
// get all events that a user partipated in
router.get("/user", async (req, res) => {
	try {
		const { user_id } = req.body;
		const events = await participant.findMany({
			where: {
				user_id,
			},
		});
		return res.json(events);
	} catch (err) {
		console.log(err);
		return res.status(500).json(err);
	}
});
// register for a event
router.post("/", async (req, res) => {
	try {
		const { user_id, event_id } = req.body;
		const participant_id = `${user_id}_${event_id}`;
		const existUser = await participant.findUnique({
			where: {
				participant_id,
			},
		});
		if (existUser)
			throw { msg: "User is already registered for the event" };
		const status = await event.findUnique({
			where: {
				event_id,
			},
			select: {
				hit_capacity: true,
				capacity: true,
				taken: true,
			},
		});
		if (typeof status.capacity === "number" && status.hit_capacity)
			throw { msg: "Sorry the event is full!" };
		status.taken++;
		if (status.taken >= status.capacity) status.hit_capacity = true;
		else status.hit_capacity = false;
		const incrementUsers = await event.update({
			where: {
				event_id,
			},
			data: {
				taken: {
					increment: 1,
				},
				hit_capacity: status.hit_capacity,
			},
		});

		const registration = await participant.create({
			data: {
				participant_id,
				user_id,
				event_id,
			},
		});
		return res.json(registration);
	} catch (err) {
		console.log(err);
		return res.status(500).json(err);
	}
});
// unregister for a event
router.delete("/", async (req, res) => {
	try {
		let { participant_id, user_id, event_id } = req.body;
		if (!participant_id) participant_id = `${user_id}_${event_id}`;
		else {
			event_id = participant_id.splice("_")[1];
		}
		const existUser = await participant.findUnique({
			where: {
				participant_id,
			},
		});
		if (!existUser) throw { msg: "User is not registered for the event" };
		const status = await event.findUnique({
			where: {
				event_id,
			},
			select: {
				hit_capacity: true,
				capacity: true,
				taken: true,
			},
		});
		if (typeof status.hit === "number") {
			status.taken--;
			status.hit_capacity = status.taken >= status.capacity;
		}
		const decrementUsers = await event.update({
			where: {
				event_id,
			},
			data: {
				taken: {
					decrement: 1,
				},
				hit_capacity: status.hit_capacity,
			},
		});
		const unregister = await participant.delete({
			where: {
				participant_id,
			},
		});
		return res.json(unregister);
	} catch (err) {
		console.log(err);
		return res.status(500).json(err);
	}
});
module.exports = router;
