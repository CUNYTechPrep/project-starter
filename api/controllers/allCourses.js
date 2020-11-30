const router = require("express").Router()
const { Model } = require("sequelize")
const { User, Course } = require("../models")
const passport = require("../middlewares/authentication")

router.get("/", passport.isAuthenticated(), async (req, res) => {
    try {
        const courses = await Course.findAll()

        //console.log("print all courses", Course.findAll())

        // const courses = await Course.findAll();
        // console.log("all courses", courses); 

        
        // const coursesTaken = user.coursesTaken.map(course =>  course.value + ": " + course.label)

        // console.log(user.coursesTaken)
        res.json({ courses})
    } catch (error) {
        console.log(error)
        res.sendStatus(404)
    }
})

// TODO


module.exports = router
