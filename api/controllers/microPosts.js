const express = require("express");
const { TableHints } = require("sequelize");
const router = express.Router();
const db = require("../models");
const { MicroPost, Property } = db;

// This is a simple example for providing basic CRUD routes for
// a resource/model. It provides the following:
//    GET    /api/micro_posts
//    POST   /api/micro_posts
//    GET    /api/micro_posts/:id
//    PUT    /api/micro_posts/:id
//    DELETE /api/micro_posts/:id
//
// The full URL's for these routes are composed by combining the
// prefixes used to load the controller files.
//    /api comes from the file ../app.js
//    /micro_posts comes from the file ./microPosts.js

router.get("/", (req, res) => {
  Property.findAll({}).then((allHouses) => res.json(allHouses));
});

router.post("/", (req, res) => {
  let { content } = req.body;

  MicroPost.create({ content })
    .then((newPost) => {
      res.status(201).json(newPost);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.post("/form", (req, res) => {
  let { address, electric, gas, mortgage, rent, step, tenanted, water } = req.body;

  Property.create({ address, electric, gas, mortgage, rent, step, tenanted, water })
    .then((newPost) => {
      res.status(201).json(newPost);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/house/:id", (req, res) => {
  const { id } = req.params;
  Property.findByPk(id).then((mpost) => {
    if (!mpost) {
      return res.sendStatus(404);
    }
    res.json(mpost);
  });
});


router.get("/house/:id/tableName/:table?", (req, res) => {
  const { id } = req.params;
  Property.findByPk(id).then((mpost) => {
    if (!mpost) {
      return res.sendStatus(404);
    }
    res.json(mpost);
  });
});

router.post("/house/:id/tableName/:table?", (req, res) => {
  const { id } = req.params;
  Property.findByPk(id).then((mpost) => {
    if (!mpost) {
      return res.sendStatus(404);
    }
    res.json(mpost);
  });
});



router.get("/:id", (req, res) => {
  const { id } = req.params;
  MicroPost.findByPk(id).then((mpost) => {
    if (!mpost) {
      return res.sendStatus(404);
    }

    res.json(mpost);
  });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  MicroPost.findByPk(id).then((mpost) => {
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
  MicroPost.findByPk(id).then((mpost) => {
    if (!mpost) {
      return res.sendStatus(404);
    }

    mpost.destroy();
    res.sendStatus(204);
  });
});

module.exports = router;
