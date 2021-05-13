const express = require('express');
const router = express.Router();
const db = require('../models');
const { User } = db;


// ./api/user   POST
// create user with the given data
router.post('/', async (req,res) => {
    let content  = req.body;

    try {
        const user = await User.create({email: content.email, userName: content.userName, password: content.password, fName: content.fName, lName: content.lName, birthDate: content.birthDate, profilePic: content.profilePic, status: content.status});
        res.sendStatus(204)
    }catch (error){
        res.sendStatus(400)
    }
});



module.exports = router;