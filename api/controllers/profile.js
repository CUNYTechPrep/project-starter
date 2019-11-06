const express = require("express");
const router = express.Router();

const { check, validationResult } = require("express-validator");
const db = require("../models");
const auth = require("../middleware/auth");
const { Company, User, Companyprofile, Userprofile } = db;

//@route    POST api/profile/user
//@desc     Create or Update profile
//@access   PRIVATE

router.post("/user", auth, async (req, res) => {
  if (!req.user) {
    return res.status(401).json({ msg: "Unauthorized" });
  }
  try {
    const { id } = req.user;
    const { bio, title, linkedIn, github, website, profilePicture } = req.body;

    let profile = await UserProfile.findOne({
      where: { userId: id }
    });

    const profileFields = {};

    profileFields.userId = req.user.id;
    if (bio) profileFields.bio = bio;
    if (title) profileFields.title = title;
    if (linkedIn) profileFields.linkedIn = linkedIn;
    if (github) profileFields.github = github;
    if (website) profileFields.website = website;
    if (profilePicture) profileFields.profilePicture = profilePicture;

    if (!profile) {
      profileFields.bio; //WHY??
      profile = await Userprofile.create(profileFields);
      return res.json(profile);
    }

    await profile.update(profileFields);
    res.json(profile);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "server error" });
  }
});

//@route   GET api/profile/company
//@desc     Create or Update Company Profile
//@access   Private
router.post("/company", auth, async (req, res) => {
  if (!req.company) {
    return res.status(401).json({ msg: "Unauthorized" });
  }

  try {
    const { id } = req.company;
    const { overview, website, industry, yearFounded, headquaters } = req.body;

    let profile = await Companyprofile.findOne({
      where: { companyId: id }
    });

    const profileFields = {};

    profileFields.companyId = req.company.id;
    if (overview) profileFields.overview = overview;
    if (website) profileFields.website = website;
    if (industry) profileFields.industry = industry;
    if (yearFounded) profileFields.yearFounded = yearFounded;
    if (headquaters) profileFields.headquaters = headquaters;

    if (!profile) {
      profileFields.overview;
      profile = await Companyprofile.create(profileFields);
      return res.json(profile);
    }

    await profile.update(profileFields);
    res.json(profile);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

module.exports = router;
