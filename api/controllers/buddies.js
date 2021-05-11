const express = require('express');
const router = express.Router();
const db = require('../models');
const passport = require('../middlewares/authentication');
const { User } = db;
const { Swipe } = db;





module.exports = router;