const router = require("express").Router()
const { Model } = require("sequelize")
const { User, Course } = require("../models")
const passport = require("../middlewares/authentication")

router.get("/", passport.isAuthenticated(), async (req, res) => {
    try {
        const user = await User.findOne({
            where: { id: req.user.id },
            attributes: {
                exclude: ["passwordHash"],
            },
            include: {
                model: Course,
                as: "coursesTaken",
                attributes: ["value","label"],
                through: { attributes: [] },
            },
        })

        console.log(user.get())

        const coursesTaken = user.coursesTaken.map(course =>  course.value + ": " + course.label)

        res.json({ ...user.get(), coursesTaken })
    } catch (error) {
        console.log(error)
        res.sendStatus(404)
    }
})

// TODO
router.post("/", passport.isAuthenticated(), async (req, res) => {
    try {
        const { firstName, lastName } = req.body
        const user = req.user
        user.firstName = firstName
        // user.major = body.major

        // await user.save()

        // res.sendStatus(200)
    } catch (e) {
        console.log(e)
        res.sendStatus(404)
    }
})

module.exports = router
