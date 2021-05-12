const express = require('express');
const router = express.Router();
const db = require('../models');
const { Review } = db;
const {Op} = require("sequelize");

router.get('/', (req, res) => {
    Review.findAll({})
        .then(reviews => res.json(reviews));
});

router.post('/addReview' , (req, res) => {
    Review.create({ reviewerUUID: req.body.reviewewUUID, 
                    reviewerEmail: req.body.reviewerEmail,
                    schoolName: req.body.schoolName,
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

router.post('/school', (req, res) => {
    Review.findAll({where: {schoolDBID: req.body.schoolDBID}})
        .then(review => {
            res.status(200).json(review);
        })
        .catch(err => {
            console.log(err);
            res.send(err);
        });
});

router.post('/user', (req, res) => {
    Review.findAll({where: {reviewerUUID: req.body.reviewerUUID}})
        .then(review => {
            res.status(200).json(review);
        })
        .catch(err => {
            console.log(err);
            res.send(err);
        });
});

router.delete('/deleteReview', (req, res, next)=>{
   
    Review.findOne({
        where: {
            [Op.and]:[
                {reviewerUUID: req.body.reviewerUUID},
                {schoolDBID: req.body.schoolDBID}
            ]
           
        }
    }).then(review =>{
        if(!review){
            return res.sendStatus(404);
        }
            review.destroy();
            res.sendStatus(204);
        
    })
})
module.exports = router;