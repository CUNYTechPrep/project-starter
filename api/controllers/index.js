const express = require("express");
const router = express.Router();

// Mount each controller under a specific route. These will be prefixes to all routes defined inside the controller
// This'll be at api/micro_posts
const microPostsController = require("./microPosts.js");
router.use("/micro_posts", microPostsController);

// This'll be at api/profile
// const profileController = require("./profiles.js")
// router.use("/profile", profileController);

// This'll be at api/transaction
const transactionController = require("./transactions.js");
router.use("/transaction", transactionController);

// This'll be at api/login
const loginController = require("./logins.js");
router.use("/login", loginController);

// This'll be at api/goal
const goalController = require("./goals.js");
router.use("/goal", goalController);

module.exports = router;
