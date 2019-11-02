const express = require("express");
const router = express.Router();
const db = require("../models");
const { Company, User } = db;

//@route    POST api/auth/users
//@desc     Login users
//@access   Public
router.post("/user", async (req, res) => {
    res.json({ success: true });
});

//@route    POST api/auth/companies
//@desc     Login companies
//@access   Public

module.exports = router;
