const express = require('express');
const router = express.Router();

// This is a simple example for providing basic CRUD routes for
// a resource/model. It provides the following:
//    GET    /about-us


// There are other styles for creating these route handlers, we typically
// explore other patterns to reduce code duplication.

router.get('/about-us', (req, res) => {

});

module.exports = router;