const express = require("express");
const router = express.Router();



// Load each controller
// const microPostsController = require("./microPosts.js");
// const authController = require('./auth.js');

// // Mount each controller under a specific route. These
// // will be prefixes to all routes defined inside the controller
// router.use("/micro_posts", microPostsController);
// router.use('/auth', authController);
const mediaController = require("./media.js");
//const mediaController1 = require("./media.js");
const authController = require('./auth.js');

// Mount each controller under a specific route. These
// will be prefixes to all routes defined inside the controller
//router.use("/media_/different",mediaController1);
router.use("/media_", mediaController);

router.use('/auth', authController);

module.exports = router;
