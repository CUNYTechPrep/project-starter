const express = require('express');
const router = express.Router();
const db = require('../models');
const { Transaction } = require('../models');
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

//console.log("\n \n INSIDE transactions.js \n \n");
router.get('/', (req,res) => {
    Transaction.findAll({where: {sellerID: {[op.lte]: 1}} } )
    .then(posts =>{ res.json(posts);
      
    })
});


router.post('/', (req, res) => {
  let { content } = req.body;

 Transaction.create(req.body)
    .then(post => {
      res.status(201).json(post);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});



router.get('/seller/:sellerID', (req, res) => {
  
  console.log("\n get transactions by sellerID \n " + req.params.sellerID);
  const { id } = req.params.sellerID;
  Transaction.findAll({where: {sellerID: req.params.sellerID} } )
  .then(posts =>{ res.json(posts);
    
  })
});

router.get('/buyer/:buyerID', (req, res) => {
  
    console.log("\n get transaction by buyerID \n " + req.params.buyerID);
    const { id } = req.params.buyerID;
    Transaction.findAll({where: {buyerID: req.params.buyerID} } )
    .then(posts =>{ res.json(posts);
      
    })
  });



router.put('/:id', (req, res) => {
  const { id } = req.params;
  Transaction.findByPk(id)
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
  Transaction.findByPk(id)
    .then(post => {
      if(!post) {
        return res.sendStatus(404);
      }

      post.destroy();
      res.sendStatus(204);
    });
});




module.exports = router;