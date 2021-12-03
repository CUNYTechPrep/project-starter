const express = require('express');
const router = express.Router();
const db = require('../models');
const { UserMatch } = db;

router.get('/:id', (req, res) => {
    //get userMatch by id
});

router.put('/:id', (req, res) => { 
    //update userMatch
});

module.exports = router;