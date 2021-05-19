const express = require('express');
const router = express.Router();
const db = require('../models');
const passport = require('../middlewares/authentication');
const { User, Forum, ThreadPosts } = db;

// This is a simple example for providing basic CRUD routes for
// a resource/model. It provides the following:
//    GET    /posts
//    POST   /posts
//    GET    /posts/:id
//    PUT    /posts/:id
//    DELETE /posts/:id

// --------------------------------------- MAIN THREADS IN FORUM --------------------

//For getting all Threads from the Forum table
router.get('/', (req, res) => {
  Forum.findAll({
    include: [{
      model: User,
      as: "author",
    }]
  })
    .then((threads) => res.json(threads));
});

//For posting a Thread to the Forum Table
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

//for deleting a Thread in the Forum Table
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  Forum.findByPk(id).then((threads) => {
    if (!threads) {
      return res.sendStatus(404);
    }
    threads.destroy();
    res.sendStatus(204);
  });
});

// ------------------------------------------- THREADPOSTS -----------------------------

//For posting a Thread to the Forum Table
router.post('/posts', (req, res) => {
  // let { content } = req.body;
  console.log("POST body: ", req.body);
  ThreadPosts.create({
    authorId: req.body.authorId,
    threadId: req.body.threadId,
    forumId: req.body.forumId,
    content: req.body.content,
    title: req.body.title,
  })
    .then((threads) => {
      res.status(201).json(threads);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

//id here lets us know WHICH thread posts to get from WHICH forum thread.
// Study this nested code below
router.get('/posts/:id', (req, res) => {
  const { id } = req.params;
  Forum.findByPk(id, 
    {
      include: [
        {
          model: User,
          as: "author",
          //this will help me make userProfile
        },
        {
          model: ThreadPosts,
          // as: "thread",
            include: [
              {
                model: User, //I want the user's info from the ThreadPost
                as: "author", 
              },
            ],
           //this will help me show main thread title
        }
      ]
    }
  )
    .then((threads) => res.json(threads));
});



router.get('/posts', (req, res) => {
    ThreadPosts.findAll({
      include: [{
        model: User,
        as: "author",
      }]
    })
    .then((threads) => res.json(threads));
});

router.delete('/posts/:id', (req, res) => {
  const { id } = req.params;
  ThreadPosts.findByPk(id).then((threads) => {
    if (!threads) {
      return res.sendStatus(404);
    }
    threads.destroy();
    res.sendStatus(204);
  });
});

module.exports = router;
