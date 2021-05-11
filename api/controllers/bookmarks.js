const express = require('express');
const router = express.Router();
const db = require('../models');
const {Op} = require("sequelize");

const { Bookmark } = db;


// This is a simple example for providing basic CRUD routes for
// a resource/model. It provides the following:
//    GET    /posts
//    POST   /posts
//    GET    /posts/:id
//    PUT    /posts/:id
//    DELETE /posts/:id 

// There are other styles for creating these route handlers, we typically
// explore other patterns to reduce code duplication.
// TODO: Can you spot where we have some duplication below?
router.get('/', (req, res)=>{
    Bookmark.findAll({})
    .then(bookmark =>res.json(bookmark));
    
})

router.get('/bookmarkedSchools', (req, res)=>{

    Bookmark.findAll({
        attributes: ['schoolDBID'],
        where: {
            userUUID: req.query.userUUID
        }
    }).then(saveBookmark=>{
        res.json(saveBookmark);
    }).catch(err =>{
        res.status(400).send(err);
    })
    
});

router.post('/addBookmark', (req, res)=>{
    Bookmark.findOrCreate({where: {userUUID: req.body.userUUID,
    schoolDBID: req.body.schoolDBID}})
    .then(([bookmark, created])=>{
        console.log(created);
        res.status(201).json(bookmark);
    }).catch(err =>{
        res.status(400).send(err);
    })
})

router.delete('/deleteBookmark', (req, res, next)=>{
    Bookmark.findOne(
        {
            where: {
                [Op.and]: [
                    {userUUID: req.body.userUUID},
                    {schoolDBID: req.body.schoolDBID}
                ]
            }
        }
    ).then(bookmark =>{
        if(!bookmark){
            return res.sendStatus(404);
        }

        bookmark.destroy();
        res.sendStatus(204);
    })
    

})

module.exports = router;