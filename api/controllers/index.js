const express = require('express');
const router = express.Router();

// Load each controller
const usersController = require('./users.js');
const matchProfilesController = require('./matchProfiles.js');
const userMatchesController = require('./userMatches.js');
const messagesController = require('./messages.js');
const postsController = require('./posts.js');
const appConfigController = require('./appConfig.js');

// Mount each controller under a specific route. These
// will be prefixes to all routes defined inside the controller
router.use('/user', usersController);
router.use('/match-profile', matchProfilesController);
router.use('/user-match', userMatchesController);
router.use('/message', messagesController);
router.use('/posts', postsController);
router.use('/application-configuration', appConfigController);

module.exports = router;