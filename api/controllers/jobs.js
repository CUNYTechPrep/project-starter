const express = require('express');
const router = express.Router();
const db = require('../models');
const { Job } = db;


router.get('/', (req, res) => {
	Job.findAll({}).
	  then(jobs => res.json(jobs));
});

router.post('/', (req, res) => {
  let { content } = req.body;
  
  Job.create({ content })
    .then(jobs => {
      res.status(201).json(jobs);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;

