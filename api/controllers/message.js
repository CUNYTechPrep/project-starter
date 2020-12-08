const router = require("express").Router()
const { sequelize } = require("../models")
const passport = require("../middlewares/authentication")

router.get("/:limit?", passport.isAuthenticated(), async (req, res) => {
    const [result] = await sequelize.query(
        `
        select *
        from "friendships"
        where ("firstUserId" = :id or "secondUserId" = :id) 
            and "pendingState" = 3
    `,
        { replacements: { id: req.user.id } }
    )

    const friendIds = []

    result.forEach(r => {
        if (req.user.id === r.firstUserId) {
            friendIds.push(r.secondUserId)
        } else {
            friendIds.push(r.firstUserId)
        }
    })

    const { limit = 50 } = req.params

    const results = await Promise.all(
        friendIds.map(id =>
            sequelize.query(
                `
        select * 
        from "messages" 
        where ("senderId" = :userId and "receiverId" = :friendId) 
        or ("senderId" = :friendId and "receiverId" = :userId)
        order by "id" desc
        limit :limit   
    `,
                {
                    replacements: {
                        userId: req.user.id,
                        friendId: id,
                        limit,
                    },
                }
            )
        )
    )

    const messages = {}
    friendIds.forEach((id, index) => (messages[id] = results[index][0]))

    res.json(messages)
})

module.exports = router
