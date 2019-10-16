const express = require('express');

const router = express.Router();
const db = require('../models');

const { Post } = db;

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


router.get('/', (req, res) => {
  Post.findAll({})
    .then((posts) => res.json(posts));
});


router.post('/', (req, res) => {
  const { content } = req.body;

  Post.create({ content })
    .then((post) => {
      res.status(201).json(post);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});


router.get('/:id', (req, res) => {
  const { id } = req.params;
  Post.findByPk(id)
    .then((post) => {
      if (!post) {
        res.sendStatus(404);
        return;
      }

      res.json(post);
    });
});


router.put('/:id', (req, res) => {
  const { id } = req.params;
  Post.findByPk(id)
    .then((obj) => {
      const post = obj;
      if (!post) {
        res.sendStatus(404);
        return;
      }

      post.content = req.body.content;
      post.save()
        .then((updatedPost) => {
          res.json(updatedPost);
        })
        .catch((err) => {
          res.status(400).json(err);
        });
    });
});


router.delete('/:id', (req, res) => {
  const { id } = req.params;
  Post.findByPk(id)
    .then((post) => {
      if (!post) {
        res.sendStatus(404);
        return;
      }

      post.destroy();
      res.sendStatus(204);
    });
});


module.exports = router;
