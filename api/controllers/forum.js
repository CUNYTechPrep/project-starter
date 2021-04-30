const express = require('express');
const router = express.Router();
const db = require('../models');
const passport = require('../middlewares/authentication');
const { Thread } = db; //takes from the same table called Thread

//Forum gets the bigger chunk of the database
router.get('/', (req,res) => {
  Thread.findAll({})
    .then(posts => res.json(posts));
});


router.post('/thread',
  passport.isAuthenticated(),
  (req, res) => {
    let { content } = req.body;

    Thread.create({ content })
    .then(post => {
      res.status(201).json(post);
    })
    .catch(err => {
      res.status(400).json(err);
    });
  }
);

module.exports = router;