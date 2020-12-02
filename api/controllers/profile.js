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
                attributes: ["value", "label"],
                through: { attributes: [] },
            },
        })

        //console.log("print all courses", Course.findAll())

        // const courses = await Course.findAll();
        // console.log("all courses", courses);

        const coursesTaken = user.coursesTaken.map(course => ({
            classCode: course.value,
            label: course.label,
        }))

        res.json({ ...user.get(), coursesTaken })
    } catch (error) {
        console.log(error)
        res.sendStatus(404)
    }
})

// TODO
router.post("/", passport.isAuthenticated(), async (req, res) => {
    try {
        const { firstName, lastName, school, major, year, classes, bio } = req.body
        const user = await User.findOne({
            where: { id: req.user.id },
            include: "coursesTaken",
        })
        user.firstName = firstName
        user.lastName = lastName
        user.school = school
        user.major = major
        user.graduate_date = year
        user.bio = bio

        const courses = await Promise.all(
            classes.map(classCode => Course.findOne({ where: { value: classCode } }))
        )
        // user.major

        await user.setCoursesTaken([])
        await user.addCoursesTaken(courses)

        await user.save()

        res.sendStatus(200)
    } catch (e) {
        console.log(e)
        res.sendStatus(404)
    }
})

module.exports = router
