const express = require('express');
const router = express.Router();


// Load each controller
const postsController = require('./posts.js');

const appConfigController = require('./appConfig.js');


const usersController = require('./users.js');
const jobsController = require('./jobs.js');

// Mount each controller under a specific route. These
// will be prefixes to all routes defined inside the controller
router.use('/posts', postsController);
router.use('/users', usersController);
router.use('/jobs', jobsController);
router.use('/application-configuration', appConfigController);


module.exports = router;