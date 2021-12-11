const express = require('express');
const router = express.Router();
const db = require('../models');
const { User } = db;

router.get('/', (req, res) => {
  //get users
  User.findAll()
  .then(users => {
    res.json(users)
  })
  .catch(e => {
    res.json({message: "error"})
  })
})

router.post('/', (req, res) => {  
  //create user
  const username = req.body.username;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const age = req.body.age;
  const email = req.body.email;
  const password = req.body.password;

  User.create({
    username: username,
    firstName: firstName,
    lastName: lastName,
    age:age,
    email: email,
    password: password
  })
  .then(user => {
    res.status(201).json(user);
  })
  .catch(e => {
    res.status(400).json(e);
  })
});

router.get('/:id', (req, res) => {
  //get user by id
  User.findByPk(req.params.id)
  .then(user => {
    if (!user) {
      return res.status(404);
    }
    res.json(user)
  })
  .catch(e => {
    res.json(e)
  })
});

module.exports = router;