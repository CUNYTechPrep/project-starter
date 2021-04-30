const express = require('express');
const router = express.Router();
const db = require('../models');
const passport = require('../middlewares/authentication');
const { Thread } = db;


//you could combine forum and thread into one IF it works out
//a thread belongs to a single forum post, but it also depends on what you mean by forum
//    GET    /thread
//    GET    /thread/:thread
//    POST   /thread
//    PUT    /thread/:thread
//    DELETE /thread/:thread


// router.get('/', (req,res) => {
//     Post.findAll({})
//       .then(posts => res.json(posts));
// });

router.get('/:thread', (req, res) => {
    const { id } = req.params;
    Thread.findByPk(id)
      .then(post => {
        if(!post) {
          return res.sendStatus(404);
        }
        res.json(post);
      });
  });

router.post('/:thread',
  passport.isAuthenticated(),
  (req, res) => {
    let { content } = req.body;

    Thread.create({ content })
      .then(post => {
        res.status(201).json(post);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  }
);

router.put('/:thread',
  passport.isAuthenticated(),
  (req, res) => {
    const { id } = req.params;
    Thread.findByPk(id)
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
  }
);

router.delete('/:thread',
  passport.isAuthenticated(),
  (req, res) => {
    const { id } = req.params;
    Thread.findByPk(id)
      .then(post => {
        if(!post) {
          return res.sendStatus(404);
        }

        post.destroy();
        res.sendStatus(204);
      });
  }
);

module.exports = router; 
