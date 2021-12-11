const e = require('express');
const express = require('express');
const router = express.Router();
const db = require('../models');
const { MatchProfile, UserMatch } = db;
const { Op } = require("sequelize");

router.post('/', (req, res) => {  
  //create match profile

  MatchProfile.create({
    age: req.body.age,
    hobby: req.body.hobby,
    bio: req.body.bio,
    userId: req.body.userId
  })
  .then(matchProfile => {
    res.status(201).json(matchProfile)
  })
  .catch(e => {
    res.status(400).json(e)
  })
});

router.get('/:userId/:hobby/:age', (req, res) => {
  //get match profiles by hobby and age
  
  let currUserId = req.params.userId;
  let currUserHobby = req.params.hobby === 'interior-design' ? 'Interior Design' : 'Art';
  let currUserAge = req.params.age;

  MatchProfile.findAll({
    where: {
      userId: {
        [Op.ne] : currUserId
      },
      hobby: currUserHobby
    }
  })
  .then(m => {
    const matchProfiles = m.map(e => e.dataValues)

    const sortedMatchProfiles = matchProfiles.sort((firstElement, secondElement) => {
      let firstElementAgeDifference = Math.abs(firstElement.age - currUserAge);
      let secondElementAgeDifference = Math.abs(secondElement.age - currUserAge);
      if (firstElementAgeDifference > secondElementAgeDifference) {
        return 1;
      } else if (firstElementAgeDifference < secondElementAgeDifference) {
        return -1;
      }
      return 0;
    })

    res.json(sortedMatchProfiles)
  })
  .catch(e => {
    res.json(e)
  }) 
})

module.exports = router;