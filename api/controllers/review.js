const express = require('express');
const router = express.Router();
const db = require('../models');
const { Review } = db;

router.get('/', (req, res) => {
    Review.findAll({})
        .then(reviews => res.json(reviews));
});

router.post('/addReview' , (req, res) => {
    Review.create({ reviewerUUID: req.body.reviewewUUID, 
                    reviewerName: req.body.reviewerName,
                    schoolDBID: req.body.schoolDBID,
                    description: req.body.description, 
                    rating: req.body.rating })
        .then(review => {
            res.status(200).json(review);
        })
        .catch(err => {
            res.send(err);
        });
});

router.get('/school', (req, res) => {
    Review.findAll({where: {schoolDBID: req.body.schoolDBID}})
        .then(review => {
            res.status(200).json(review);
        })
        .catch(err => {
            console.log(err);
            res.send(err);
        });
});

router.get('/user', (req, res) => {
    Review.findAll({where: {reviewerUUID: req.body.reviewerUUID}})
        .then(review => {
            res.status(200).json(review);
        })
        .catch(err => {
            console.log(err);
            res.send(err);
        });
});

module.exports = router;