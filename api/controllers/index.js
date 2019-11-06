const express = require("express");
const router = express.Router();

// Load each controller
const usersController = require("./users");
const companiesController = require("./companies");
const authController = require("./auth");
const profileController = require("./profile");

// Mount each controller under a specific route. These
// will be prefixes to all routes defined inside the controller
router.use("/user", usersController);
router.use("/company", companiesController);
router.use("/auth", authController);
router.use("/profile", profileController);

module.exports = router;
