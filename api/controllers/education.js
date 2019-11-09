const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const db = require("../models");
const auth = require("../middleware/auth");
const { Education, User, Userprofile, Experience } = db;

//@route    POST api/education/
//@desc     Add education
//@access   PRIVATE
router.post(
    "/",
    [
        auth,
        [
            check("school", "School is required")
                .not()
                .isEmpty(),
            check("fieldofstudy", "Field of study is required")
                .not()
                .isEmpty(),
            check("degree", "Degree is required")
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
            const { school, fieldofstudy, degree, from, to } = req.body;
            let educationFields = { school, fieldofstudy, degree, from };
            educationFields.userId = id;
            if (to) educationFields.to = to;
            // await Education.create(educationFields);

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

//@route    PUT api/education/:id
//@desc     Update education
//@access   PRIVATE
router.put(
    "/:edu_id",
    [
        auth,
        [
            check("school", "School is required")
                .not()
                .isEmpty(),
            check("fieldofstudy", "Field of study is required")
                .not()
                .isEmpty(),
            check("degree", "Degree is required")
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
            const { edu_id } = req.params;
            const { school, fieldofstudy, degree, from, to } = req.body;
            let educationFields = { school, fieldofstudy, degree, from };
            if (to) educationFields.to = to;

            const education = await Education.findByPk(edu_id);
            await education.update(educationFields);

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
router.delete("/:edu_id", auth, async (req, res) => {
    if (!req.user) {
        return res.status(401).json({ msg: "Unauthorized" });
    }

    try {
        const { edu_id } = req.params;
        const education = await Education.findByPk(edu_id);
        await education.destroy();
        res.json({ msg: "Education deleted" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: "server error" });
    }
});

module.exports = router;
