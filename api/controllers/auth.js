const router = require('express').Router();
const { Users } = require('../models');
const passport = require('../middlewares/authentication');


router.post('/signup', (req, res) => {

  if(req.body.password == req.body.password2) {
    Users.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      phonenumber: req.body.phonenumber,
      auth_token: req.body.email
    })
      .then((user) => {
        req.login(user, () => res.status(201).json(user));
      })
      .catch((err) => {
        console.log(err)
        res.status(400).json({ msg: 'Failed Signup', err });
      });
  }

});


router.post('/login',
  passport.authenticate('local'),
  (req, res) => {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.json(req.user);
  });

router.post('/logout', (req, res) => {
  req.logout();
  res.status(200).json({ message: 'Logout successful' });
})

module.exports = router;
