const express = require('express');
const router = express.Router();
const db = require('../models');
const { Match } = db;

router.post('/', (req, res) => {  
  //create match
});

router.get('/:id', (req, res) => {
  //get match by id
  let currId = req.params.id;
  res.json({message: "Received " + currId})
});

router.put('/:id', (req, res) => { 
    //update match
});

module.exports = router;