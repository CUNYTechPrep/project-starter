const express = require("express");
const router = express.Router();
const { User } = require("../models");

//    GET    /users
//    GET    /users/:userId
//    userId = email

router.get("/", (req, res) => {
  User.findAll({}).then((user) => res.json(user));
});
router.get("/:userId", (req, res) => {
  const { userId } = req.params;
  User.findOne({ where: { email: userId } }).then((user) => res.json(user));
});

module.exports = router;
