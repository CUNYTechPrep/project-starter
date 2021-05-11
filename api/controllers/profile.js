const express = require('express');
const router = express.Router();
const db = require('../models');
const passport = require('../middlewares/authentication');
const { User } = db;

router.get('/', (req, res) => {
    const { id } = req.params;
    User.findByPk(id) 
        .then(post => {
        if(!post) {
            return res.sendStatus(404);
        }
        res.json(post);
        });
});

//for editing profile info
router.put('/', (req, res) => {
    const { id } = req.params;
    User.findByPk(id)
      .then(user => {
        if(!user) {
          return res.sendStatus(404);
        }
  
        user.age = req.body.age;
        user.bio = req.body.bio;
        user.fitLevel = req.body.fitLevel;
        user.height = req.body.height;
        user.weight = req.body.weight;

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