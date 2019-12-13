const express = require('express');
const router = express.Router();
const db = require('../models');
const { User } = db;
const passport = require('../middlewares/authentication');

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

// command: curl localhost:8080/api/users/
//return all users
router.get('/', (req,res) => {
  User.findAll({
    where: {
    isBiz: false
  }
  })
    .then(posts => res.json(posts));
});

//post user info to User table
//command: curl localhost:8080/api/users/

router.post('/signup', (req, res) => {
  User.create({ ...req.body })
    .then(user => {
      console.log(user)
      req.login(user, () => res.status(201).json(user));
    })
    .catch(err => {
      res.status(400).json(err);
      console.log(err)
    });
});

router.post('/login', (req,res) => {
passport.authenticate('local', (err,user,info) =>{
   console.log(err, user,info)
   // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.json(req.user);
  })(req,res)
}); 

router.post('/logout', (req, res) => {
  req.logout();
  res.status(200).json({ message: 'Logout successful' });
})


router.get('/:id', (req, res) => {
  const { id } = req.params;
  User.findByPk(id)
    .then(user => {
      if(!user) {
        return res.sendStatus(404);
      }

      res.json(post);
    });
});


// router.put('/:id', (req, res) => {
//   const { id } = req.params;
//   Post.findByPk(id)
//     .then(post => {
//       if(!post) {
//         return res.sendStatus(404);
//       }

//       post.content = req.body.content;
//       post.save()
//         .then(post => {
//           res.json(post);
//         })
//         .catch(err => {
//           res.status(400).json(err);
//         });
//     });
// });


// router.delete('/:id', (req, res) => {
//   const { id } = req.params;
//   Post.findByPk(id)
//     .then(post => {
//       if(!post) {
//         return res.sendStatus(404);
//       }

//       post.destroy();
//       res.sendStatus(204);
//     });
// });


module.exports = router;
