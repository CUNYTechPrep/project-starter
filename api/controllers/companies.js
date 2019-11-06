const express = require("express");
const router = express.Router();
const db = require("../models");
const { Company } = db;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");

//@route    POST api/company
//@desc     Register company
//@access   Public
router.post(
    "/",
    [
        check("name", "Pleaser enter your name")
            .not()
            .isEmpty(),
        check("email", "Please enter your email").isEmail(),
        check(
            "password",
            "Pleaser enter a password greater than 6 characters"
        ).isLength({ min: 6 })
    ],
    async (req, res) => {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        //console.log("req body", req.body);

        let { name, email, password } = req.body;

        try {
            //check if company exists
            let company = await Company.findOne({ where: { email } });
            console.log(company);

            if (company) {
                return res.status(400).json({
                    error: [
                        {
                            param: "emailExists",
                            msg: "Email already exists"
                        }
                    ]
                });
            }

            //Hash the password
            const salt = await bcrypt.genSalt(10);
            hashedPassword = await bcrypt.hash(password, salt);

            company = await Company.create({
                name,
                email,
                password: hashedPassword
            });

            const payload = {
                company: {
                    id: company.id,
                    type: "company"
                }
            };

            //Creates jwt token
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

module.exports = router;
