const express = require("express");
const { TableHints } = require("sequelize");
const router = express.Router();
const db = require("../models");
const { User } = db;

//save user login info into DB - fails if email already present
router.post("/register", (req, res) => {
	console.log("POST body: ", req.body);
	User.create({
		name: req.body.name,
		email: req.body.email,
		password: req.body.password,
	})
		.then((user) => {
			user.password = undefined;
			req.login(user, () => res.status(201).json(user));
		})
		.catch((err) => {
			res.status(400).json({ msg: "Failed Signup", err });
		});
});

//post login to authenticate user
router.post("/login", passport.authenticate("local"), (req, res) => {
	// If this function gets called, authentication was successful.
	// `req.user` contains the authenticated user.
	res.json(req.user);
});

//logout user and remove cookie session
router.get("/login", (req, res) => {
	if (req.user) {
		res.json(req.user);
	} else {
		res.sendStatus(401);
	}
});

router.post("/logout", (req, res, next) => {
	req.logout((err) => {
		if (err) return next(err);
		res.status(200).json({ message: "Logout successful" });
	});
});

module.exports = router;
