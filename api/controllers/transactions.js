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

console.log("\n \n INSIDE transaction \n \n");
router.get('/', (req,res) => {
    Transaction.findAll({where: {sellerID: {[op.lte]: 1}} } )
    .then(posts =>{ res.json(posts);
      
    console.log("\n INSIDE GET REQ FOR TRANSACTION  "+posts);
    })
});


router.post('/', (req, res) => {
  let { content } = req.body;
 // console.log("INSIDE THE POST    " + req.body);
  
 Transaction.create(req.body)
    .then(post => {
      res.status(201).json(post);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});



router.get('/seller/:sellerID', (req, res) => {
  
  console.log("\n sellerID \n \n " + req.params.sellerID);
  const { id } = req.params.sellerID;
  Transaction.findAll({where: {sellerID: req.params.sellerID} } )
  .then(posts =>{ res.json(posts);
    
    console.log("\n INSIDE GET REQ FOR TRANSACTIONS  \n"+posts);
  })
});

router.get('/buyer/:buyerID', (req, res) => {
  
    console.log("\n ID \n \n " + req.params.buyerID);
    const { id } = req.params.buyerID;
    Transaction.findAll({where: {buyerID: req.params.buyerID} } )
    .then(posts =>{ res.json(posts);
      
      console.log("\n INSIDE GET REQ FOR TRANSACTIONS  \n"+posts);
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





/*
This was what was orignially here I'm leaving this here just in case we need it later. The post isn't working I'm trying to fix it.

const db = require('../models');
const { Product } = db;

module.exports = {
  postProduct(req,res){
    console.log("POST body: ", req.body);
    const {productName, price, amount, description, sellerID, category, imageURL} = req.body;
    Product.create({
      productName, 
      price, 
      amount, 
      description, 
      sellerID, 
      category,
      imageURL,
      createdAt: new Date(),
      updatedAt: new Date(),
    })
      .then((product) => {
        res.status(200).json(product);
      })
      .catch((err) => {
        res.status(400).json({ msg: 'Failed to submit product', err });
      });
  }
}
*/


module.exports = router;