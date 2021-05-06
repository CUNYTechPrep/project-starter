const express = require('express');
const router = express.Router();


// Load each controller
const postsController = require('./posts.js');
const appConfigController = require('./appConfig.js');
const bookmarkController = require('./bookmarks.js');
const reviewController = require('./review.js');

// Mount each controller under a specific route. These
// will be prefixes to all routes defined inside the controller
router.use('/posts', postsController);
router.use('/application-configuration', appConfigController);
router.use('/bookmarks', bookmarkController);
router.use('/review', reviewController);


module.exports = router;