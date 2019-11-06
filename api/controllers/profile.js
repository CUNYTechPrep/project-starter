const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
const db = require("../models");
const { UserProfile } = db;

//@route    POST api/profile/user
//@desc     Create or Update profile
//@access   PRIVATE

router.post(
  "/user",
  //[
  //the bio, links etc... should be optional i think
  //so no checks
  //],
  auth,

  async (req, res) => {
    if (!req.user) {
      return res.status(401).json({ msg: "Unauthorized" });
    }

    const { id } = req.user;
    const { bio, title, linkedIn, github, website, profilePicture } = req.body;

    let profile = await UserProfile.findOne({
      where: { userId: id }
    });

    try {
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: "server error" });
    }
  }
);
