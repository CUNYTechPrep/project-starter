const { Message } = require("../models")
const users = {}

module.exports = (socket, io) => {
    const { id } = socket.handshake.query
    if (!id) {
        socket.disconnect(true)
        return
    }

    users[id] = socket.id
    console.log("a user connected", socket.id)

    socket.on("send-message", data => {
        console.log(
            `I'm ${id}, and I'm sending data to ${data.id} and its socket id is ${users[data.id]}`
        )

        Message.create({ senderId: id, receiverId: data.id, content: data.message })
        io.to(users[data.id]).emit("receive-message", data)
        io.to(users[data.id]).emit("current-message", data.message)
    })

    // socket.on('message-read', data => {})

    socket.on("disconnect", () => {
        console.log("user disconnect")
    })
}
