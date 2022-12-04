const express = require("express");
const router = express.Router();
const db = require("../models");
const { Transaction } = db;

// This is a simple example for providing basic CRUD routes for
// a resource/model. It provides the following:
//    GET    /api/transaction
//    POST   /api/transaction
//    GET    /api/transaction/:id
//    PUT    /api/transaction/:id
//    DELETE /api/transaction/:id
//
// The full URL's for these routes are composed by combining the
// prefixes used to load the controller files.
//    /api comes from the file ../app.js
//    /transaction comes from the file ./transactions.js

router.get("/", (req, res) => {
  Transaction.findAll({}).then((allPosts) => res.json(allPosts));
});

router.post("/", (req, res) => {
  let { content } = req.body;

  Transaction.create({ content })
    .then((newPost) => {
      res.status(201).json(newPost);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Transaction.findByPk(id).then((mpost) => {
    if (!mpost) {
      return res.sendStatus(404);
    }

    res.json(mpost);
  });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  Transaction.findByPk(id).then((mpost) => {
    if (!mpost) {
      return res.sendStatus(404);
    }

    mpost.content = req.body.content;
    mpost
      .save()
      .then((updatedPost) => {
        res.json(updatedPost);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  Transaction.findByPk(id).then((mpost) => {
    if (!mpost) {
      return res.sendStatus(404);
    }

    mpost.destroy();
    res.sendStatus(204);
  });
});

module.exports = router;
