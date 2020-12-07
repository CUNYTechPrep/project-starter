const router = require("express").Router()
const { Friendship } = require("../models")
const passport = require("../middlewares/authentication")

router.get("/", passport.isAuthenticated(), async (req, res) => {
    const [friends1, friends2] = await Promise.all([
        req.user.getFirstUserFriends(),
        req.user.getSecondUserFriends(),
    ])

    const friends = friends1.concat(friends2)

    const requestedFriends = []
    const pendingFriends = []
    const mutualFriends = []

    friends.forEach(friend => {
        switch (friend.friendship.pendingState) {
            case 1:
                requestedFriends.push(friend)
                break
            case 2:
                pendingFriends.push(friend)
                break
            default:
                mutualFriends.push(friend)
        }
    })

    res.json({ requestedFriends, pendingFriends, mutualFriends })
})

router.get("/:id", passport.isAuthenticated(), async (req, res) => {
    const { id } = req.params

    if (req.user === id) {
        res.sendStatus(404)
        return
    }

    const firstUserId = Math.min(+req.user.id, +id)
    const secondUserId = Math.max(+req.user.id, +id)

    const isFirstUser = req.user.id == firstUserId

    try {
        let { pendingState } = await Friendship.findOne({
            where: {
                firstUserId,
                secondUserId,
            },
        })

        if (!isFirstUser) {
            pendingState = pendingState === 1 ? 2 : 1
        }

        res.json({ pendingState })
    } catch (err) {
        res.json({ pendingState: 0 })
    }
})

router.post("/", passport.isAuthenticated(), async (req, res) => {
    const { id } = req.body

    const firstUserId = Math.min(+req.user.id, +id)
    const secondUserId = Math.max(+req.user.id, +id)

    const isFirstUser = req.user.id == firstUserId

    const [friendship, created] = await Friendship.findOrCreate({
        where: {
            firstUserId,
            secondUserId,
        },
        defaults: {
            pendingState: isFirstUser ? 1 : 2,
        },
    })

    const { pendingState } = friendship
    if (!created && ((isFirstUser && pendingState === 2) || (!isFirstUser && pendingState === 1))) {
        friendship.pendingState = 3
        await friendship.save()
    }

    return res.json({ pendingState: friendship.pendingState })
})

module.exports = router
