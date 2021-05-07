const express = require('express');
const router = express.Router();
const db = require('../models');
const passport = require('../middlewares/authentication');
const { User } = db;

router.get('/user', (req, res) => {
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
router.put('/user', (req, res) => {
    const { id } = req.params;
    User.findByPk(id)
      .then(post => {
        if(!post) {
          return res.sendStatus(404);
        }
  
    post.age = req.body.age;
    post.bio = req.body.bio;
    post.fitLevel = req.body.fitLevel;
    post.height = req.body.height;
    post.weight = req.body.weight;

    post.save()
        .then(post => {
        res.json(post);
        })
        .catch(err => {
        res.status(400).json(err);
        });
    });
});