const express = require("express");
const router = express.Router();
const { User, Group } = require("../models");

//    GET    /userGroups
//    GET    /userGroups/:userId
//    userId = email

router.get("/:userId/", (req, res) => {
  const { userId } = req.params;
  User.findOne({ where: { email: userId } }).then((user) => {
    const gs = [];
    Group.findAll().then((groups) => {
      groups.map((group) => {
        if (group.members.includes(userId)) {
          gs.push(group);
        }
      });
      res.json(gs);
    });
  });
});

module.exports = router;
