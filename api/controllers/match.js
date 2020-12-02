const router = require("express").Router()
const { User, Course } = require("../models")
const passport = require("../middlewares/authentication")

router.get("/", passport.isAuthenticated(), async (req, res) => {
    const user = await User.findOne({ where: { id: req.user.id }, include: "coursesTaken" })

    const studentsEnrolledPromises = user.coursesTaken.map(course => course.getStudentsEnrolled())

    const studentsEnrolled = await Promise.all(studentsEnrolledPromises)

    const uniqueClassmates = await Promise.all(
        studentsEnrolled
            .flat()
            .filter(
                (student, index, students) =>
                    student.id !== user.id && students.findIndex(s => s.id === student.id) === index
            )
            .map(async classmate => ({
                name: classmate.firstName + " " + classmate.lastName,
                college: classmate.school,
                major: classmate.major,
                courses: (await classmate.getCoursesTaken()).map(course => course.label),
            }))
    )

    res.json(uniqueClassmates)
})

module.exports = router
