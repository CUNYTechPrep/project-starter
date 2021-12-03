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
  const dob = req.body.dob;
  const gender = req.body.gender;
  const email = req.body.email;
  const password = req.body.password;

  User.create({
    username: username,
    firstName: firstName,
    lastName: lastName,
    dob: dob,
    gender: gender,
    email: email,
    password: password
  })
  .then(user => {
    res.send(user);
  })
  .catch(e => {
    console.log(e)
    res.json({message: "Error"})
  })
});

router.get('/:id', (req, res) => {
  //get user by id
  User.findByPk(req.params.id)
  .then(user => {
    res.send(user)
  })
  .catch(e => {
    res.send({message: "Error"})
  })
});

module.exports = router;