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
    User.findAll()
        .then(users => res.json(users));
});

router.post('/users/:id', (req, res) => {
    let { content } = req.body;
    
    User.create({ content })
});

router.post('/users', (req, res) => {
    let { content } = req.body;

    Post.create({ content })
        .then(user => {
            res.status(201).json(user);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});


router.get('/users/:id', (req, res) => {
    const { id } = req.params;
    Post.findByPk(id)
        .then(user => {
            if (!user) {
                return res.sendStatus(404);
            }

            res.json(user);
        });
});

// for the username, you can change many items, 
// how would you handle that?
// router.put('/:id', (req, res) => {
//     const { id } = req.params;
//     Post.findByPk(id)
//         .then(post => {
//             if (!post) {
//                 return res.sendStatus(404);
//             }
//             post.content = req.body.content;
//             post.save()
//                 .then(post => {
//                     res.json(post);
//                 })
//                 .catch(err => {
//                     res.status(400).json(err);
//                 });
//         });
// });

module.exports = router;