const express = require("express")
const bodyParser = require("body-parser")
const expressSession = require("express-session")
const morgan = require("morgan")
const path = require("path")
const db = require("./models")
const passport = require("./middlewares/authentication")
const app = express()
const PORT = process.env.PORT || 8000
const { User, Friendship, Course } = require("./models")

// this lets us parse 'application/json' content in http requests
app.use(bodyParser.json())

app.use(
    expressSession({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
    })
)

//app.use(session({resave: true, saveUninitialized: true, secret: 'XCR3rsasa%RDHHH', cookie: { maxAge: 60000 }}));

console.log("process.env.port", process.env.SESSION_SECRET)
// setup passport and session cookies
// app.use(expressSession({
//   secret: process.env.SESSION_SECRET,
//   resave: false,
//   saveUninitialized: true }));
//app.use(express.cookieParser('your secret here'));
//app.use(express.session());
app.use(passport.initialize())
app.use(passport.session())

// add http request logging to help us debug and audit app use
const logFormat = process.env.NODE_ENV === "production" ? "combined" : "dev"
app.use(morgan(logFormat))

// this mounts controllers/index.js at the route `/api`
app.use("/api", require("./controllers"))

// for production use, we serve the static react build folder
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/build")))

    // all unknown routes should be handed to our react app
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../client/build", "index.html"))
    })
}

// update DB tables based on model updates. Does not handle renaming tables/columns
// NOTE: toggling this to true drops all tables (including data)
db.sequelize.sync({ force: false })

// start up the server
app.listen(PORT, () => console.log(`Listening on ${PORT}`))
;(async () => {
    const user1 = await User.findOne({
        where: { id: 1 },
        include: ["firstUserFriends", "coursesTaken"],
    })

    const user2 = await User.findOne({
        where: { id: 2 },
        include: ["secondUserFriends"],
    })

    // await Friendship.create({ firstUserId: 1, secondUserId: 2, pendingState: 3 })

    console.log(user1.firstUserFriends[0].id, user2.secondUserFriends[0].id)

    const course2 = await Course.findOne({ where: { id: 2 }, include: ["studentsEnrolled"] })
    console.log(user1.coursesTaken.length)
    console.log(course2.studentsEnrolled.length)
})()
