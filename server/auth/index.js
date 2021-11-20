var express = require('express');
var router = express.Router();
const { User } = require('../models')
const bcrypt = require('bcrypt');
const passport = require('../middlewares/authentication');
// Route paths are prefixed with /auth


router.post('/signup', (req, res) => {
  const {email, password} = req.body;
      bcrypt.hash(password, 10)
          .then((hash) => {
          // Store hash in your password DB.
          User.create({email, password: hash}).then(user => {
              return req.login(user, () => res.status(201).json(user));
          })
      }).catch((err) => {
          res.status(400).json({ msg: 'Failed Signup', err });
        });
  }
)

router.post('/login',
  passport.authenticate('local'),
  (req, res) => {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.json(req.user);
  });

router.get('/login', (req, res) => {
  if(req.user) {
    res.json(req.user)
  } else {
    res.sendStatus(401);
  }
})

router.post('/logout', (req, res) => {
  req.logout();
  res.status(200).json({message: 'You are succesfully logged out'});
})


module.exports = router;