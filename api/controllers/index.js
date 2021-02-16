const express = require("express")
const router = express.Router()

// Load each controller
const authController = require("./auth")
const appConfigController = require("./appConfig.js")
const profileController = require("./profile")
const matchController = require("./match")
const allCourses = require("./allCourses")
const friendController = require("./friend")
const messageController = require("./message")
// Mount each controller under a specific route. These
// will be prefixes to all routes defined inside the controller
router.use("/auth", authController)
router.use("/application-configuration", appConfigController)
router.use("/profile", profileController)
router.use("/match", matchController)
router.use("/all-courses", allCourses)
router.use("/friend", friendController)
router.use("/message", messageController)

module.exports = router
