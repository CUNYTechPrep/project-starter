const express = require("express");
const router = express.Router();
const db = require("../models");
const { Goal } = db;

// This is a simple example for providing basic CRUD routes for
// a resource/model. It provides the following:
//    GET    /api/goal
//    POST   /api/goal
//    GET    /api/goal/:id
//    PUT    /api/goal/:id
//    DELETE /api/goal/:id
//
// The full URL's for these routes are composed by combining the
// prefixes used to load the controller files.
//    /api comes from the file ../app.js
//    /goal comes from the file ./goals.js

router.get("/", (req, res) => {
  Goal.findAll({}).then((allPosts) => res.json(allPosts));
});

router.post("/", (req, res) => {
  let { content } = req.body;

  Goal.create({ content })
    .then((newPost) => {
      res.status(201).json(newPost);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  Goal.findByPk(id).then((mpost) => {
    if (!mpost) {
      return res.sendStatus(404);
    }

    res.json(mpost);
  });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  Goal.findByPk(id).then((mpost) => {
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
  Goal.findByPk(id).then((mpost) => {
    if (!mpost) {
      return res.sendStatus(404);
    }

    mpost.destroy();
    res.sendStatus(204);
  });
});

module.exports = router;
