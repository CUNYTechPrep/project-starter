const express = require("express");
const router = express.Router();
const db = require("../models");
const auth = require("../middleware/auth");
const {
    Company,
    User,
    Companyprofile,
    Userprofile,
    Education,
    Experience
} = db;

//@route    POST api/profile/user
//@desc     Create or Update profile
//@access   PRIVATE
router.post("/user", auth, async (req, res) => {
    if (!req.user) {
        return res.status(401).json({ msg: "Unauthorized" });
    }
    try {
        const { id } = req.user;
        const { bio, title, linkedIn, github, website } = req.body;

        let profile = await Userprofile.findOne({
            where: { userId: id }
        });

        const profileFields = {};

        profileFields.userId = req.user.id;
        if (bio) profileFields.bio = bio;
        if (title) profileFields.title = title;
        if (linkedIn) profileFields.linkedIn = linkedIn;
        if (github) profileFields.github = github;
        if (website) profileFields.website = website;

        if (!profile) {
            await Userprofile.create(profileFields);
            const user = await User.findOne({
                where: { id },
                attributes: { exclude: ["password"] },
                include: [
                    { model: Userprofile },
                    { model: Education },
                    { model: Experience }
                ]
            });
            return res.json(user);
        }

        await profile.update(profileFields);
        const user = await User.findOne({
            where: { id },
            attributes: { exclude: ["password"] },
            include: [
                { model: Userprofile },
                { model: Education },
                { model: Experience }
            ]
        });
        res.json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "server error" });
    }
});

//@route    POST api/profile/company
//@desc     Create or Update Company Profile
//@access   Private
router.post("/company", auth, async (req, res) => {
    if (!req.company) {
        return res.status(401).json({ msg: "Unauthorized" });
    }

    try {
        const { id } = req.company;
        const {
            overview,
            website,
            industry,
            yearFounded,
            headquaters
        } = req.body;

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

//@route    GET api/profile/user/:id
//@desc     Get user profile
//@access   PRIVATE
router.get("/user/:id", auth, async (req, res) => {
    try {
        //Extracts the profile ID
        const { id } = req.params;

        const user = await User.findOne({
            where: { id },
            attributes: { exclude: ["password"] },
            include: [
                { model: Userprofile },
                { model: Education },
                { model: Experience }
            ]
        });
        if (!user) {
            return res.status(404).json({ msg: "User not found" });
        }
        res.json(user);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: "Server Error" });
    }
});

//@route    GET api/profile/company/:id
//@desc     Get company profile
//@access   PRIVATE
router.get("/company/:id", auth, async (req, res) => {
    try {
        //Extracts the profile ID
        const { id } = req.params;
        const profile = await Companyprofile.findOne({
            where: { id },
            include: {
                model: Company,
                attributes: { exclude: ["password", "email"] }
            }
        });
        if (!profile) {
            return res.status(404).json({ msg: "Profile not found" });
        }
        res.json(profile);
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: "Server Error" });
    }
});

module.exports = router;
