const express = require('express');
const router = express.Router();
const db = require('../models');
const { Message } = db;
const { Op } = require("sequelize");

router.get('/:currUserId/:otherUserId', (req,res) => {
    //get messages

    Message.findAll({
        where: {
            [Op.or]: [
                {[Op.and]: [
                    {senderId: req.params.currUserId},
                    {recipientId: req.params.otherUserId}
                ]},
                {[Op.and]: [
                    {senderId: req.params.otherUserId},
                    {recipientId: req.params.currUserId}
                ]}
            ]
        }
    })
    .then(messages => res.json(messages))
    .catch(e => res.json(e))
});

router.get('/most-recent/:currUserId/:otherUserId', (req, res) => {
    //get most recent message between two users

    Message.findOne({
        where: {
            [Op.or]: [
                {[Op.and]: [
                    {senderId: req.params.currUserId},
                    {recipientId: req.params.otherUserId}
                ]},
                {[Op.and]: [
                    {senderId: req.params.otherUserId},
                    {recipientId: req.params.currUserId}
                ]}
            ]
        },
        order: [[ 'createdAt', 'DESC' ]]
    })
    .then(message => res.json(message))
    .catch(e => res.json(e))
})

router.get('/:currUserId', (req, res) => {
    //get most recent message from all users

    Message.findAll({
        where: {
            [Op.or]: [
                {senderId: req.params.currUserId},
                {recipientId: req.params.currUserId}
            ]
        },
        order: [[ 'createdAt', 'DESC' ]]
    })
    .then(m => {
        const messages = m.map(e => e.dataValues)

        const otherUserIds = messages.map(e => {
            if (e.senderId !== parseInt(req.params.currUserId)) {
                return e.senderId
            } else {
                return e.recipientId
            }
        })

        let otherUserIdIndicesNoDuplicates = [];

        for (let i = 0; i < otherUserIds.length; ++i) {
            let e = otherUserIds[i];

            if (otherUserIds.indexOf(e) === i) {
                otherUserIdIndicesNoDuplicates.push(i)
            }
        }

        let mostRecentMessages = [];

        for (let i = 0; i < otherUserIdIndicesNoDuplicates.length; ++i) {
            mostRecentMessages.push(messages[otherUserIdIndicesNoDuplicates[i]])
        }

        res.json(mostRecentMessages)
    })
    .catch(e => res.json(e))
})
  
router.post('/', (req, res) => {
    //create message

    Message.create({
        messageBody: req.body.messageBody,
        senderId: req.body.senderId,
        recipientId: req.body.recipientId
    })
    .then(message => res.status(201).json(message))
    .catch(e => res.status(400).json(e))
});

module.exports = router;