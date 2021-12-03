const express = require('express');
const router = express.Router();
const db = require('../models');
const { User } = db;

router.get('/', (req,res) => {
    //get messages
});
  
  
router.post('/', (req, res) => {
    //create message
});

module.exports = router;