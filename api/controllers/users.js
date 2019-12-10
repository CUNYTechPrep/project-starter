const express = require('express');
const router = express.Router();
const db = require('../models');
const { User } = db;

// This is a simple example for providing basic CRUD routes for
// a resource/model. It provides the following:
//    POST   /user -> creates new user (registering)
//    GET    /users/:id
//    PUT    /user/:id
//    DELETE /user/:id 

// Note to self:
//  {x, y} = foo;
//  is equivalent to:
//  x = foo.x;
//  y = foo.y;

router.get('/', (req,res) => {
    User.findByPk(1)
    .then(user => res.json(user))
    .catch(e => res.json(e));
});


module.exports = router;