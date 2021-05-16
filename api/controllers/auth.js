const router = require('express').Router();
const { User } = require('../models');
const passport = require('../middlewares/authentication');

router.post('/signup', (req, res) => {
  console.log('POST body: ', req.body);
  User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    age: req.body.age,
    email: req.body.email,
    age: req.body.age,
    password: req.body.password,
    gender: req.body.gender,
    height: req.body.height,
    weight: req.body.weight,
    fitLevel: req.body.fitLevel,
    bio: req.body.bio,
    image: req.body.image,
  })
    .then((user) => {
      req.login(user, () => res.status(201).json(user));
    })
    .catch((err) => {
      res.status(400).json({ msg: 'Failed Signup', err });
    });
});

router.post('/login', passport.authenticate('local'), (req, res) => {
  // If this function gets called, authentication was successful.
  // `req.user` contains the authenticated user.
  res.json(req.user);
});

router.post('/logout', (req, res) => {
  req.logout();
  res.status(200).json({ message: 'Logout successful' });
});

module.exports = router;
