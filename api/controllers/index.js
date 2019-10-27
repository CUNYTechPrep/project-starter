const express = require('express');
const router = express.Router();


// Load each controller
const appConfigController = require('./appConfig.js');
const postsController = require('./posts.js');
const usersController = require('./users.js');

// Mount each controller under a specific route. These
// will be prefixes to all routes defined inside the controller
router.use('/application-configuration', appConfigController);
router.use('/posts', postsController);
router.use('/users', usersController); 


module.exports = router;