const router = require('express').Router();
const { User } = require('../models');
const passport = require('../middlewares/authentication');

// ./api/auth/login
router.post('/login',
  passport.authenticate('local'), 
  (req, res) => {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.json(req.user);
});

// ./api/auth/logout
router.post('/logout', (req, res) => {
    req.logout();
    res.status(200).json({ message: 'Logout successful' });
})

module.exports = router;