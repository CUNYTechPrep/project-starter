const express = require('express');
const router = express.Router();
const db = require('../models');
const { Trip, User } = db;

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


router.get('/', (req,res) => {
  Trip.findAll({})
    .then(posts => res.json(posts));
});

// when authentication is in place, we will know who to add to but for 
// now user is hardcoded to be 1
router.post('/', async (req, res) => {
  try {
    let { content } = req.body;
    const trip = await Trip.create(content);
    const user = await User.findByPk(1);
    await trip.setUser(user);

    res.status(201).json({
          trip,
          user
        });
  } catch(e) {
    res.status(400).json(e);
  }
});


// get all trips from user
router.get('/userId/:id', (req, res) => {
    const { id } = req.params;
    Trip.findAll({where: {UserId: id}})
    .then(post => {
      if(!post) {
        return res.sendStatus(404);
      }

      res.json(post);
    });
});




router.put('/:id', (req, res) => {
  const { id } = req.params;
  Trip.findByPk(id)
    .then(post => {
      if(!post) {
        return res.sendStatus(404);
      }

      post.content = req.body.content;
      post.save()
        .then(post => {
          res.json(post);
        })
        .catch(err => {
          res.status(400).json(err);
        });
    });
});


// router.delete('/:id', (req, res) => {
//   const { id } = req.params;
//   Trip.findByPk(id)
//     .then(post => {
//       if(!post) {
//         return res.sendStatus(404);
//       }

//       post.destroy();
//       res.sendStatus(204);
//     });
// });


module.exports = router;