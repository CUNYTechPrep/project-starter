const express = require('express');
const router = express.Router();
const db = require('../models');
const User = require('../models/User');
const { UserMatch } = db;
const { Op } = require("sequelize");

router.post('/', (req, res) => {
    //create user match

    UserMatch.create({
        outcome: req.body.outcome,
        userId: req.body.userId,
        matchId: req.body.matchId
    })
    .then(u => res.status(201).json(u))
    .catch(e => res.status(400).json(e))
});

router.get('/:userId/:matchId', (req, res) => {
    //get userMatch by userId and matchId

    //Essentially, after a user match is created, check if another user match exists
    //where the current user is the match id

    //Only entered if curr user wants to match

    let currUserId = req.params.userId;
    let otherUserId = req.params.matchId;

    UserMatch.findOne({
        where: {
            userId: otherUserId,
            matchId: currUserId
        },
        include: 'OtherUser'
    })
    .then(userMatch => {
        if (userMatch === null) {
            console.log("Other user has not matched yet.")
            res.json({message: "Other user has not matched yet."})
        } else {
            if (userMatch.dataValues.outcome === true) {
                console.log("Users matched!")
                res.json({message: "Users matched!"})
            } else {
                console.log("Users are NOT a match!")
                res.json({message: "Users are NOT a match!"})
            }
        }
    })
    .catch(e => {
        res.json(e)
    })
});

router.get('/:currUserId', (req, res) => {
    //get recent matches

    UserMatch.findAll({
        where: {
            userId: req.params.currUserId,
            outcome: true
        },
    })
    .then(userMatches => {
        const otherUserIds = userMatches.map(u => u.dataValues.matchId)

        UserMatch.findAll({
            where: {
                userId: {
                    [Op.in] : otherUserIds
                },
                matchId: req.params.currUserId,
                outcome: true
            },
            include: 'CurrentUser'
        })
        .then(userMatches => {
            const matchedUsers = userMatches.map(u => u.CurrentUser.dataValues)

            res.json(matchedUsers)
        })
        .catch(e => res.json(e))
    })
    .catch(e => res.json(e))

})

module.exports = router;