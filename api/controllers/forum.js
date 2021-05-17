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
  Forum.findAll({}).then((threads) => res.json(threads));
});

router.post('/', (req, res) => {
  // let { content } = req.body;
  console.log("POST body: ", req.body);
  Forum.create({
    authorId: req.body.authorId,
    category: req.body.category,
    threadTitle: req.body.threadTitle,
  })
    .then((threads) => {
      res.status(201).json(threads);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  threadPosts.findByPk(id).then((threads) => {
    if (!threads) {
      return res.sendStatus(404);
    }
    res.json(threads);
  });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  threadPosts.findByPk(id).then((threads) => {
    if (!threads) {
      return res.sendStatus(404);
    }
    threads.authorId = req.body.authorId,
    threads.category = req.body.category,
    threads.threadTitle = req.body.threadTitle,

    threads
      .save()
      .then((threads) => {
        res.json(threads);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  threadPosts.findByPk(id).then((threads) => {
    if (!threads) {
      return res.sendStatus(404);
    }
    threads.destroy();
    res.sendStatus(204);
  });
});

module.exports = router;
