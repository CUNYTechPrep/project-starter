const express = require('express');
const router = express.Router();
const db = require('../models');
const passport = require('../middlewares/authentication');
const { Swipe } = db;

// Here you have to figure out what do you do when someone HAS Swiped!

// Are they friends or on the block list or buddies list.... 

// when someone swipes, what data do I send back