const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const db = require("../models");
const auth = require("../middleware/auth");
const { Education, User, Userprofile, Experience } = db;

//@route    POST api/experience/
//@desc     Add experience
//@access   PRIVATE
router.post(
    "/",
    [
        auth,
        [
            check("title", "Title is required")
                .not()
                .isEmpty(),
            check("company", "Company name is required")
                .not()
                .isEmpty(),
            check("from", "From date is required")
                .not()
                .isEmpty()
        ]
    ],
    async (req, res) => {
        if (!req.user) {
            return res.status(401).json({ msg: "Unauthorized" });
        }

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const { id } = req.user;
            const {
                title,
                company,
                location,
                from,
                to,
                description,
                current
            } = req.body;

            let experienceFields = { title, company, from, current };
            experienceFields.userId = id;
            if (to) experienceFields.to = to;
            if (location) experienceFields.location = location;
            if (description) experienceFields.description = description;

            await Experience.create(experienceFields);

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
        } catch (err) {
            console.log(err);
            res.status(500).json({ msg: "server error" });
        }
    }
);

//@route    PUT api/experience/:id
//@desc     Update experience
//@access   PRIVATE
router.put(
    "/:exp_id",
    [
        auth,
        [
            check("title", "Title is required")
                .not()
                .isEmpty(),
            check("company", "Company name is required")
                .not()
                .isEmpty(),
            check("from", "From date is required")
                .not()
                .isEmpty()
        ]
    ],
    async (req, res) => {
        if (!req.user) {
            return res.status(401).json({ msg: "Unauthorized" });
        }

        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const { id } = req.user;
            const { exp_id } = req.params;
            const {
                title,
                company,
                location,
                from,
                to,
                description,
                current
            } = req.body;

            let experienceFields = { title, company, from, current };
            experienceFields.userId = id;
            if (to) experienceFields.to = to;
            if (location) experienceFields.location = location;
            if (description) experienceFields.description = description;

            const experience = await Experience.findByPk(exp_id);
            await experience.update(experienceFields);

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
        } catch (err) {
            console.log(err);
            res.status(500).json({ msg: "server error" });
        }
    }
);

//@route    DELETE api/education/:id
//@desc     Delete education
//@access   PRIVATE
router.delete("/:exp_id", auth, async (req, res) => {
    if (!req.user) {
        return res.status(401).json({ msg: "Unauthorized" });
    }

    try {
        const { exp_id } = req.params;
        const experience = await Experience.findByPk(exp_id);
        await experience.destroy();
        res.json({ msg: "Experience deleted" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: "server error" });
    }
});

module.exports = router;
