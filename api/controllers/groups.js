const express = require("express");
const router = express.Router();
const { Group } = require("../models");

//    GET    /groups
//    GET    /users/:groupId

router.get("/", (req, res) => {
  Group.findAll().then((results) => res.json(results));
});
router.get("/:groupId", (req, res) => {
  const { groupId } = req.params;
  Group.findOne({ where: { groupId: groupId } }).then((group) => {
    res.json(group);
  });
});

module.exports = router;
