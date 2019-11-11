const express = require('express');
const router = express.Router();
const db = require('../models');
const { Trip, User, Media } = db;

// This is a simple example for providing basic CRUD routes for
// a resource/model. It provides the following:
//    GET    /posts
//    POST   /posts
//    GET    /posts/:id
//    PUT    /posts/:id
//    DELETE /posts/:id 

// There are other styles for creating these route handlers, we typically
// explore other patterns to reduce code duplication.
// TODO: Can you spot where we have some duplication below?


router.get('/:id', (req,res) => {
  const { id } = req.params;
  Trip.findAll({where: {userId: id}})
  .then(trip => {
    res.json(trip);
  });
});

// when authentication is in place, we will know who to add to but for 
// now user is hardcoded to be 1
router.post('/', (req, res) => {
  let { content } = req.body;
  Trip.create({
    name: content.name,
    description: content.description,
    coverphoto: content.coverPhoto,
    userId: 1,
  })
  .then((trip) => {
    content.pics.forEach((el) => {
      Media.create({name:'1233', description:'', photo: el})
      .then((media) =>{
        media.setTrip(trip);
      }); 
    })
      res.json(trip)
  })
  .catch( e => res.json(e));
});


// get all trips from user
// router.get('/userId/:id', (req, res) => {
//     const { id } = req.params;
//     Trip.findAll({where: {UserId: id}})
//     .then(post => {
//       if(!post) {
//         return res.sendStatus(404);
//       }

//       res.json(post);
//     });
// });

module.exports = router;