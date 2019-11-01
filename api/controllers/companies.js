const express = require("express");
const router = express.Router();
const db = require("../models");
const { Company } = db;

//@route    POST api/companies
//@desc     Register companies
//@access   Public
router.post("/", async (req, res) => {
    res.json({ success: true });
});

module.exports = router;
