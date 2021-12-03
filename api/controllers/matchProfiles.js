const express = require('express');
const router = express.Router();
const db = require('../models');
const { MatchProfile } = db;

router.post('/', (req, res) => {  
  //create match profile

  console.log(req.body)

  MatchProfile.create({
    age: req.body.age,
    hobby: req.body.hobby,
    bio: req.body.bio,
    userId: req.body.userId
  })
  .then(matchProfile => {
    res.json(matchProfile)
  })
  .catch(e => {
    console.log(e)
    res.json({message: "Error"})
  })
});

router.get('/', (req, res) => {
  //get match profiles by hobby and age
  res.json(req.query);

  // MatchProfile.findAll({
  //   where: {
      
  //   }
  // })
})

router.get('/:id', (req, res) => {
  //get match profile by id
});

module.exports = router;