const router = require("express").Router()
const { Model } = require("sequelize")
const { User, Course } = require("../models")
const passport = require("../middlewares/authentication")

router.get("/", passport.isAuthenticated(), async (req, res) => {
    try {
        const courses = (await Course.findAll())
            .map(course => ({
                ...course.get(),
            }))
            .filter(
                (course, index, courses) =>
                    courses.findIndex(c => c.label === course.label) === index
            )

        res.json({ courses })
    } catch (error) {
        console.log(error)
        res.sendStatus(404)
    }
})

module.exports = router
