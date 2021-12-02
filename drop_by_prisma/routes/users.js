const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");
const { PrismaClientRustPanicError } = require("@prisma/client/runtime");
const { user, participant, event } = new PrismaClient();
let bcrypt = require("bcrypt");
const { json } = require("express");
const salt = bcrypt.genSaltSync(8);
const updateInfo = (user) =>{
	return {
		'username':user.username,
		'first_name':user.first_name,
		'last_name':user.last_name,
		'email':user.email,
		'phone_number':user.phone_number,
		'birth_date':user.birth_date,
		'address':user.address,
		'city':user.city,
		'state':user.state,
		'country':user.country,
		'zip':user.zip,
		'is_vaccinated':user.is_vaccinated,
		'is_verifed':user.is_verifed,
		'pfp':user.pfp
	};
}
		
		
function checkLogin(req){
	if(req.session.login) return true; // incase of null, we need the if statement
	return false;
}
function login(user,req){
	if(checkLogin(req)) return {'msg':"You are already logged in."};
	req.session.login = true;
	req.session.user_id = user.user_id;
	let userInfo = updateInfo(user);
	req.session.user_info = userInfo;
	return {'msg':"Logged in successfully.",'user_id':req.session.user_id,"user_info":req.session.user_info};
}
function logout(req){
	if(!checkLogin(req)) return {'msg': 'You are not logged in.'};
	req.session.login = false;
	req.session.user_id = null;
	req.session.user_info = null;
	return {'msg': 'Logged out successfully'};
}

// Get list of users
router.get("", async (req, res) => {
	try {
		const users = await user.findMany({
			orderBy:{
				createdAt: 'desc'
			}
		});
		return res.json(users);
	} catch (err) {
		console.log(err);
		return res.status(500).json(err);
	}
});
router.get("/login", async (req, res) => {
	let { user_identification, password } = req.body;
	try{
		const users = await user.findFirst({
			where: {
				OR: [{ user_id: user_identification }, { username: user_identification }],
			},
		});
		if(!users) return res.json({ msg: "Username/email is not found" });
		password = bcrypt.compareSync(password,users.password);
		if(password){
			res.json(login(users,req));
		}else return {'msg':'Incorrect password'};
	}catch(err){
		res.json({'msg': 'Login failed'});
	}
});
router.get("/logout", async (req, res) => {
	try{
		res.json(logout(req));
	}catch(err){
		res.json({'msg': 'Cannot log out'});
	}
});
// password needs to be hashed via bcrypt
router.post("/sign_up", async (req, res) => {
	let {
		username,
		first_name,
		last_name,
		password,
		email,
		phone_number,
		birth_date,
		address,
		city,
		state,
		country,
		zip,
		is_vaccinated,
		is_verifed,
	} = req.body;
	zip = String(zip);
	birth_date = new Date(birth_date);
	const itemExists = await function (item) {
		let res = user.findUnique({
			where: {
				[item.prop]: item.value,
			},
		});
		return res;
	};
	let checkFor = [
		{ prop: "username", value: username },
		{ prop: "email", value: email },
		{ prop: "phone_number", value: phone_number },
	];
	for (let field of checkFor) {
		if (await itemExists(field)) {
			return res.status(400).json({
				msg: `${field.value}: is already taken/used`,
			});
		}
	}
	password = bcrypt.hashSync(password, salt);
	// let age = Math.floor((Date.now()-birth_date)* 0.0001);
	/*
    We can add age later on, issue with age is that
    we'll have to update their ages on each new day.
    */
	const createUser = await user.create({
		data: {
			username,
			password,
			first_name,
			last_name,
			email,
			phone_number,
			birth_date,
			// age,
			address,
			city,
			state,
			country,
			zip,
			is_vaccinated,
			is_verifed,
		},
	});
	res.json(createUser);
});
router.get("/:user_id", async (req, res) => {
	const user_identification = req.params.user_id || "";
	try {
		const users = await user.findFirst({
			where: {
				OR: [{ user_id: user_identification }, { username: user_identification }],
			},
		});
		if (!users) return res.json({ msg: "Enter a valid username or user ID." });
		return res.json(users);
	} catch (err) {
		console.log(err);
		return res.status(500).json(err);
	}
});

// verify a vaccination status
router.patch("/:username/vaccinated", async (req, res) => {
	const { username } = req.params.username;
	try {
		const updateUserInfo = await user.update({
			where: {
				username,
			},
			update: {
				is_vaccinated: true,
			},
		});
        res.json(updateUserInfo);
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});
// verify a user
router.patch("/:username/verifed", async(req, res) => {
	const { username } = req.params.username;
	try {
		const updateUserInfo = await user.update({
			where: {
				username,
			},
			update: {
				is_verifed: true,
			},
		});
        res.json(updateUserInfo);
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});
// edit user profile
router.patch("/edit", async(req, res) => {
	const {
		user_id,
		first_name,
		last_name,
		email,
		phone_number,
		birth_date,
		address,
		city,
		state,
		country,
		zip,
	} = req.body;
	try {
		const updateUserInfo = await user.update({
			where: {
				user_id,
			},
			update: {
				first_name: first_name,
				last_name: last_name,
				email: email,
				phone_number: phone_number,
				birth_date: birth_date,
				address: address,
				city: city,
				state: state,
				country: country,
				zip: zip,
				updatedAt: Date.now(),
			},
		});
        res.json(updateUserInfo);
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});
// get a list of all events that the user registered for
router.get('/:username/events', async(req, res)=>{
    try{
        const {username} = req.params;
        const user_id = await user.findMany({
            where:{username:username},
            select:{user_id:true}
        }).then(res=>{
            if(res.length===0) throw ({'msg':'Invalid username'});
            return res[0].user_id;
        });
        if(!user_id) throw ({'msg':'Invalid user login'});
        let event_ids = await participant.findMany({
            where:{
                user_id: user_id
            },
            select:{
                event_id: true
            }
        });
		event_ids = event_ids.map(i=> i.event_id);
		const events = await event.findMany({
			where:{
				event_id:{
					in: event_ids
				}
			},
			orderBy:{
				event_start: 'desc'
			}
		})
        return res.json(events);
    }catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});
// get a list of all events that the user registered for that has past
router.get('/:username/events/past', async(req, res)=>{
    try{
        const {username} = req.params;
        const user_id = await user.findMany({
            where:{username:username},
            select:{user_id:true}
        }).then(res=>{
            if(res.length===0) throw ({'msg':'Invalid username'});
            return res[0].user_id;
        });
        if(!user_id) throw ({'msg':'Invalid user login'});
        let event_ids = await participant.findMany({
            where:{
                user_id: user_id
            },
            select:{
                event_id: true
            }
        });
		event_ids = event_ids.map(i=> i.event_id);
		const events = await event.findMany({
			where:{
				event_id:{
					in: event_ids
				},
				event_end:{
					lt: new Date(Date.now())
				}
			},
			orderBy:{
				event_start: 'asc'
			}
		})
        return res.json(events);
    }catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});
// get a list of all events that the user registered for that has not past
router.get('/:username/events/active', async(req, res)=>{
    try{
        const {username} = req.params;
        const user_id = await user.findMany({
            where:{username:username},
            select:{user_id:true}
        }).then(res=>{
            if(res.length===0) throw ({'msg':'Invalid username'});
            return res[0].user_id;
        });
        if(!user_id) throw ({'msg':'Invalid user login'});
		let event_ids = await participant.findMany({
            where:{
                user_id: user_id
            },
            select:{
                event_id: true
            }
        });
		event_ids = event_ids.map(i=> i.event_id);
		const events = await event.findMany({
			where:{
				event_id:{
					in: event_ids
				},
				event_end:{
					gte: new Date(Date.now())
				}
			},
			orderBy:{
				event_start: 'desc'
			}
		})
        return res.json(events);
    }catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});
module.exports = router;
