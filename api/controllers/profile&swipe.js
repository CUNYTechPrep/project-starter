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


//for the user profile
router.get('/:me', (req, res) => {
  const { me } = req.params; //object that contains all variables in the URL
  User.findByPk(me) 
      .then(user => {
      if(!user) {
          return res.sendStatus(404);
      }
      res.json(user);
      });
});








//CHANGE THESE URL here later for editing profiles
//for editing profile info
router.put('/:bio', (req, res) => {
  const { id } = req.params;
  User.findByPk(id)
    .then(user => {
      if(!user) {
        return res.sendStatus(404);
      }

      user.bio = req.body.bio;

      user.save()
      .then(user => {
      res.json(user);
      })
      .catch(err => {
      res.status(400).json(err);
      });
  });
});

//OTHER PUT ROUTER functions for later
// user.fitLevel = req.body.fitLevel;
//         user.height = req.body.height;
//         user.weight = req.body.weight;


module.exports = router;