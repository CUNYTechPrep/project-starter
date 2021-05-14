const express = require('express');
const router = express.Router();
const db = require('../models');
const passport = require('../middlewares/authentication');
const { Forum, threadPosts } = db;

// This is a simple example for providing basic CRUD routes for
// a resource/model. It provides the following:
//    GET    /posts
//    POST   /posts
//    GET    /posts/:id
//    PUT    /posts/:id
//    DELETE /posts/:id

router.get('/', (req, res) => {
  Forum.findAll({}).then((posts) => res.json(posts));
});

router.post('/', (req, res) => {
  // let { content } = req.body;
  console.log("POST body: ", req.body);
  Forum.create({
    content: req.body.content,
    category: req.body.category,
    threadTitle: req.body.threadTitle,
  })
  Forum.create({ content })
    .then((post) => {
      res.status(201).json(post);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  threadPosts.findByPk(id).then((post) => {
    if (!post) {
      return res.sendStatus(404);
    }
    res.json(post);
  });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  threadPosts.findByPk(id).then((post) => {
    if (!post) {
      return res.sendStatus(404);
    }
    post.content = req.body.content;
    post
      .save()
      .then((post) => {
        res.json(post);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  threadPosts.findByPk(id).then((post) => {
    if (!post) {
      return res.sendStatus(404);
    }
    post.destroy();
    res.sendStatus(204);
  });
});

module.exports = router;
