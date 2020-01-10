const router = require('express').Router();
const { Users } = require('../models');
const passport = require('../middlewares/authentication');


router.post('/signup', (req, res) => {

  if(req.body.password == req.body.password2) {
    console.log("Pass match")
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
      
        const message = err["errors"][0]["message"]


        let errmsg = "Signup Error" 
        if(message == "email must be unique") {
          console.log("Email in use")
          errmsg = "Email already in use"
        } else if(message == "username must be unique") {
          errmsg = "Username already in use"
        } else if(message == "phonenumber must be unique") {
          errmsg = "Phone number already in use"
        }
        
        console.log("Post error check")
        res.status(400).json({ msg: errmsg  });
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

