const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");
const db = require("../models");
const auth = require("../middleware/auth");
const { Company, User } = db;

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
router.post(
    "/users",
    [
        check("email", "Please enter a valid email").isEmail(),
        check("password", "Please enter a password").exists()
    ],
    async (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body;

        try {
            //Find user by email
            const user = await User.findOne({ where: { email } });

            //If no user was found
            if (!user) {
                return res.status(400).json({
                    errors: [
                        {
                            params: "invalidCredentials",
                            msg: "Invalid Credentials"
                        }
                    ]
                });
            }

            //Compares password - returns true or false
            const passwordMatches = await bcrypt.compare(
                password,
                user.password
            );

            //If passwords don't match
            if (!passwordMatches) {
                return res.status(400).json({
                    errors: [
                        {
                            params: "invalidCredentials",
                            msg: "Invalid Credentials"
                        }
                    ]
                });
            }

            const payload = {
                user: {
                    id: user.id
                }
            };

            //return payload
            jwt.sign(
                payload,
                process.env.secret,
                { expiresIn: "7 days" },
                (err, token) => {
                    if (err) throw err;
                    res.json({ token });
                }
            );
        } catch (err) {
            console.error(err);
            res.status(500).json({ msg: "Server error" });
        }
    }
);

//@route    POST api/auth/companies
//@desc     Login companies
//@access   Public
router.post(
    "/companies",
    [
        check("email", "Please enter a valid email").isEmail(),
        check("password", "Please enter a password").exists()
    ],

    async (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body;

        try {
            //find company by email
            const company = await Company.findOne({ where: { email } });
            //console.log("COMPANY--", company);
            if (!company) {
                return res.status(400).json({
                    errors: [
                        {
                            params: "invalidCredentials",
                            msg: "Invalid Credentials"
                        }
                    ]
                });
            }

            //compares passwords - boolean
            const passwordMatches = await bcrypt.compare(
                password,
                company.password
            );

            //if passwords do not match
            if (!passwordMatches) {
                return res.status(400).json({
                    errors: [
                        {
                            params: "invalidCredentials",
                            msg: "Invalid Credentials"
                        }
                    ]
                });
            }

            const payload = {
                compnay: {
                    id: company.id
                }
            };

            //return payload
            jwt.sign(
                payload,
                process.env.secret,
                { expiresIn: "7 days" },
                (err, token) => {
                    if (err) throw err;
                    res.json({ token });
                }
            );
        } catch (error) {
            console.log(error);
            res.status(500).json({ msg: "server error" });
        }
    }
);

//@route    DELETE api/auth/users
//@desc     Delete user
//@access   Private
router.delete("/users", auth, async (req, res) => {
    try {
        if (!req.user) {
            return res.status(401).json({ msg: "Unauthorized" });
        }
        const { id } = req.user;
        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({ msg: "User does not exist" });
        }
        await user.destroy();
        res.json({ msg: "User deleted" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: "Server error" });
    }
});

module.exports = router;
