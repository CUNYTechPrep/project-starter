const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
const db = require("../models");
const { User } = db;

//@route    POST api/users
//@desc     Register users
//@access   Public
router.post(
  "/",
  [
    check("firstName", "Please enter your first name")
      .not()
      .isEmpty(),
    check("lastName", "Please enter your last name")
      .not()
      .isEmpty(),
    check("email", "Please enter a valid email").isEmail(),
    check(
      "password",
      "Please enter a password greater that 6 characters"
    ).isLength({ min: 6 })
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //console.log("req body", req.body);

    let { firstName, lastName, email, password } = req.body;

    try {
      //Check if user exists
      let user = await User.findOne({ where: { email } });
      console.log(user);
      if (user) {
        return res.status(400).json({
          errors: [
            {
              param: "emailExists",
              msg: "Email already exist"
            }
          ]
        });
      }

      //Hash the password -
      const salt = await bcrypt.genSalt(10);
      hashedPassword = await bcrypt.hash(password, salt);

      user = await User.create({
        firstName,
        lastName,
        email,
        password: hashedPassword
      });

      const payload = {
        user: {
          id: user.id
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
      console.error(error);
      res.status(500).json({ msg: "server error" });
    }
  }
);

module.exports = router;
