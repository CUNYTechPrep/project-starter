const express = require("express");
const router = express.Router();
const db = require("../models");
const auth = require("../middleware/auth");
const { Company, User, UserProfile } = db;

//@route    GET api/auth/users
//@desc     Get current user
//@access   Private
router.get("/users", auth, async (req, res) => {
  if (!req.user) {
    return res.status(401).json({ msg: "Unauthorized" });
  }
  try {
    const { id } = req.user;
    const user = await User.findByPk(id, {
      attributes: { exclude: ["password"] }
    });
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});

//@route    GET api/auth/company
//@desc     Get current company
//@access   Private
router.get("/companies", auth, async (req, res) => {
  if (!req.company) {
    return res.status(401).json({ msg: "Unauthorized" });
  }
  try {
    const { id } = req.company;
    const company = await Company.findByPk(id, {
      attributes: { exclude: ["password"] }
    });
    res.json(company);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Server error" });
  }
});

//@route    POST api/auth/users
//@desc     Login user
//@access   Public

//@route    POST api/auth/companies
//@desc     Login companies
//@access   Public

module.exports = router;
