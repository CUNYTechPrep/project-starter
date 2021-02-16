const express = require("express")
const bodyParser = require("body-parser")
const expressSession = require("express-session")
const morgan = require("morgan")
const path = require("path")
const db = require("./models")
const passport = require("./middlewares/authentication")
const app = express()
const PORT = process.env.PORT || 8000
const { User, Message } = require("./models")
const server = require("http").createServer(app)
const io = require("socket.io")(server)

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

io.on("connect", socket => {
    require("./socket/chat")(socket, io)
})

// start up the server
server.listen(PORT, () => console.log(`Listening on ${PORT}`))
// ;(async () => {
//     const user = await User.findByPk(1)
//     // const newMessage = await Message.create({ senderId: 2, receiverId: 1, content: "Hi back" })
//     const sent = await user.getSentMessages()
//     const received = await user.getReceivedMessages()

//     console.log(
//         sent
//             .concat(received)
//             .sort((a, b) => a.id - b.id)
//             .map(message => message.content)
//     )
// })()

// const fs = require("fs")
// const data = fs.readFileSync(process.cwd() + "/api/data/qc_2020_fall.json", "utf-8")
// const qc = JSON.parse(data)[0]

// qc.courses.forEach(({ topic, sections }) => {
//     sections.forEach(({ classCode, instructor }) => {
//         Course.create({
//             value: classCode,
//             label:
//                 topic.slice(0, topic.indexOf("-")) +
//                 "- " +
//                 instructor.slice(0, instructor.indexOf(",")),
//         })
//     })
// })
