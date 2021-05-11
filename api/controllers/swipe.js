const express = require('express');
const router = express.Router();
const db = require('../models');
const passport = require('../middlewares/authentication');
const { Swipe } = db;
const { User } = db;


//populate the Swipe tab
router.get('/', (req,res) => {
  User.findAll({})
    .then(users => res.json(users));
});

// Here you have to figure out what do you do when someone HAS Swiped!

// Are they friends or on the block list or buddies list.... 

// when someone swipes, what data do I send back

module.exports = router;