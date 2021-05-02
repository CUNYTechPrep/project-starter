const express = require("express");
const router = express.Router();

// Load each controller
// Importing
const postsController = require('./posts.js');
const appConfigController = require('./appConfig.js');
const placesController = require("./places.js");
const usersController = require("./users");
const groupsController = require("./groups");
// what you need to declare when adding more controllers
//const commentController = require('./comment.js');
//const likesController = require('./likes.js');

// Mount each controller under a specific route. These
// will be prefixes to all routes defined inside the controller
// Similar to app.use/app.get, router allows us to segment out our api
router.use('/posts', postsController); //full api that gives us access to all our json data
//Examples of adding more controllers
//router.use('/comments', commentsController);
//router.use('/likes', likesController);
router.use('/application-configuration', appConfigController);
router.use("/places", placesController);
router.use("/users", usersController);
router.use("/groups", groupsController);

module.exports = router;
