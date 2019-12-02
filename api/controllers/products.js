
const express = require('express');
const router = express.Router();
const db = require('../models');
const { Product } = require('../models');
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

console.log("INSIDE PRODUCTS");
router.get('/', (req,res) => {
    Product.findAll({})
    .then(posts =>{ res.json(posts);
      
    })
});


router.post('/', (req, res) => {
  let { content } = req.body;
  Product.create(req.body)
    .then(post => {
      res.status(201).json(post);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});


router.get('/:productName',(req, res) => {
  console.log("\n " + req.params.productName);

  Product.findAll({where: { productName:{ [op.iLike] :'%'+req.params.productName+'%'}} })
    .then(post => {
      
      if(!post) {
        return res.sendStatus(404);
        
      }

      res.json(post);
    });
});



router.get('/:id', (req, res) => {
  
  const { id } = req.params;
  Product.findByPk(id)
    .then(post => {
      if(!post) {
        return res.sendStatus(404);
      }

      res.json(post);
    });
});



router.put('/:id', (req, res) => {
  const { id } = req.params;
  Product.findByPk(id)
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
  console.log("\n id is "+ id);
  Product.findByPk(id)
    .then(post => {
      if(!post) {
        return res.sendStatus(404);
      }

      post.destroy();
      res.sendStatus(204);
    });
});



//router.get for each categories
//I couldnt get this working in a better way so I used this kind of brute force approach


router.get('/category/arts-and-crafts',(req, res) => {
  Product.findAll({where: { category: 'arts-and-crafts'} })
    .then(post => {
      if(!post) {
        return res.sendStatus(404);
      }

      res.json(post);
    });
});
router.get('/category/other',(req, res) => {
  Product.findAll({where: { category: 'other'} })
    .then(post => {
      if(!post) {
        return res.sendStatus(404);
      }

      res.json(post);
    });
});
router.get('/category/notebooks',(req, res) => {
  Product.findAll({where: { category: 'notebooks'} })
    .then(post => {
      if(!post) {
        return res.sendStatus(404);
      }

      res.json(post);
    });
});

router.get('/category/bags',(req, res) => {
  Product.findAll({where: { category: 'bags'} })
    .then(post => {
      if(!post) {
        return res.sendStatus(404);
      }

      res.json(post);
    });
});
router.get('/category/electronics',(req, res) => {
  Product.findAll({where: { category: 'electronics'} })
    .then(post => {
      if(!post) {
        return res.sendStatus(404);
      }

      res.json(post);
    });
});
router.get('/category/class-notes',(req, res) => {
  Product.findAll({where: { category: 'class-notes'} })
    .then(post => {
      if(!post) {
        return res.sendStatus(404);
      }

      res.json(post);
    });
});
router.get('/category/books',(req, res) => {
  Product.findAll({where: { category: 'books'} })
    .then(post => {
      if(!post) {
        return res.sendStatus(404);
      }

      res.json(post);
    });
});
router.get('/category/textbooks',(req, res) => {
  Product.findAll({where: { category: 'textbooks'} })
    .then(post => {
      if(!post) {
        return res.sendStatus(404);
      }

      res.json(post);
    });
});

router.get('/u/:sellerID',(req, res) => {
  Product.findAll({where: { sellerID: req.params.sellerID} })
    .then(post => {
      if(!post) {
        return res.sendStatus(404);
      }

      res.json(post);
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