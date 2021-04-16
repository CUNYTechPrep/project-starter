const express = require('express');
const router = express.Router();


// Load each controller
const postsController = require('./posts.js');
//const forumController = require('./forum.js'); //GET, POST, PUT, DELETE
const threadController = require('./thread.js'); //GET, POST, PUT, DELETE
//you could combine forum and thread into one IF it works out
//a thread belongs to a single forum post, but it also depends on what you mean by forum
//    GET    /thread
//    GET    /thread/:specific thread
//    POST   /thread
//    PUT    /thread/:specific thread
//    DELETE /thread/:specific thread

const profileController = require('./profile.js'); //GET, PUT, POST, DELETE

// GET, PUT (to update data on server)
    // If two people swiped on each other, 
    // THEN they get each others profiles shown in their buddies list
const swipeProfileController = require('./swipe.js'); //GET, PUT
//this will help us track the location of the user 
//get maps location info from front end to here


const matchedbuddiesController = require('./buddies.js'); //GET
const placesController = require('./places.js'); //GET


const appConfigController = require('./appConfig.js');


// Mount each controller under a specific route. These
// will be prefixes to all routes defined inside the controller
router.use('/posts', postsController);
router.use('/application-configuration', appConfigController);


module.exports = router;