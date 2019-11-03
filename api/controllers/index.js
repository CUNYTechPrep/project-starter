const express = require("express");
const router = express.Router();

// Load each controller
const usersController = require("./users");
const companiesController = require("./companies");
const authController = require("./auth");

// Mount each controller under a specific route. These
// will be prefixes to all routes defined inside the controller
router.use("/users", usersController);
router.use("/companies", companiesController);
router.use("/auth", authController);

module.exports = router;
