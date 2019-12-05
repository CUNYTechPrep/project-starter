const express = require('express');
const router = express.Router();
const db = require('../models');
const { User } = require('../models');
const Sequelize = require('sequelize');
const op = Sequelize.Op;


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

console.log("\n \n INSIDE Users \n \n");
router.get('/', (req,res) => {
    User.findAll({where: {userID: {[op.lte]: 1}} } )
    .then(posts =>{ res.json(posts);
      
    })
});


router.post('/', (req, res) => {
  let { content } = req.body;
  
    User.create(req.body)
    .then(post => {
      res.status(201).json(post);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});



router.get('/:userID', (req, res) => {
  
  console.log("\n get user by userID \n  " + req.params.userID+ "   "+ req.params.username);

  User.findAll({where: {userID: req.params.userID} } )
  .then(posts =>{ res.json(posts);
    
  })
});



router.get('/username/:username', (req, res) => {
  
    console.log("\n username \n \n " + req.params.username+ "   "+ req.params.userID);
  
    User.findAll({where: {username: req.params.username} } )
    .then(posts =>{ res.json(posts);
      
    })
  });

router.put('/:id', (req, res) => {
  const { id } = req.params;
  User.findByPk(id)
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


router.delete('/:id', (req, res) => {
  const { id } = req.params;
  User.findByPk(id)
    .then(post => {
      if(!post) {
        return res.sendStatus(404);
      }

      post.destroy();
      res.sendStatus(204);
    });
});





module.exports = router;