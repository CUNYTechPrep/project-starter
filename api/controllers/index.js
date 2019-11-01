const express = require("express");
const router = express.Router();

// Load each controller
const usersController = require("./users");
const companiesController = require("./companies");

// Mount each controller under a specific route. These
// will be prefixes to all routes defined inside the controller
router.use("/users", usersController);
router.use("/companies", companiesController);

module.exports = router;
