const express = require('express');
const router = express.Router();
const db = require('../models');
const { Vote } = db;

//    GET    /votes
//    POST   /votes
//    GET    /votes/:groupId/:placeId
//    PUT    /votes/:groupId/:placeId

router.get('/', (req, res) => {
    Vote.findAll({})
    .then(results => res.json(results));
});

router.get('/:groupId', (req, res) => {
    const { groupId } = req.params;
    Vote.findAll({where: {gId: groupId}})
    .then(results => res.json(results));
})

router.get('/:groupId/:placeId', (req, res) => {
    const { groupId, placeId } = req.params;
    Vote.findAll({where: {gId: groupId, pId: placeId}})
    .then(results => res.json(results));
})

module.exports = router;