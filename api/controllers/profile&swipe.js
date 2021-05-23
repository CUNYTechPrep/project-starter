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
/////api/users/swipd   verything setup by farhene index.js   note to self


router.post('/swiped', (req,res) => {

  console.log("Post body:", req.body);
  Swipe.create({
    status: req.body.status,
    swiperId: req.body.swiperId,
    swipeeId: req.body.swipeeId
  })
    .then((swipe) => {
      res.status(201).json(swipe);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get('/swiped/:swpid/:swprid', (req, res) => {
  const { swpid } = req.params;
  const { swprid } = req.params;


  console.log(swprid)
  Swipe.findByFk(swpid)
    .then((swipe) => res.json(swipe));
});





































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
router.put('/:me', (req, res) => {
  const { me } = req.params;
  User.findByPk(me)
    .then(user => {
      if(!user) {
        return res.sendStatus(404);
      }

      // user.bio = req.body.bio;
      console.log(user);
      const newBio = req.body.bio ? req.body.bio : user.bio;
      const newFit = req.body.fitLevel ? req.body.fitLevel : user.fitLevel;
      const newHeight = req.body.height ? req.body.height : user.height;
      const newWeight = req.body.weight ? req.body.weight : user.weight;

      user.update({
        bio: newBio,
        fitLevel: newFit,
        height: newHeight,
        weight: newWeight,
      })

      user.save()
      .then(user => {
      res.json(user);
      })
      .catch(err => {
      res.status(400).json(err);
      });
  });
});


module.exports = router;