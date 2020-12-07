const users = {}

module.exports = (socket, io) => {
    const { id } = socket.handshake.query
    // if (!id) {
    //     socket.disconnect(true)
    //     return
    // }

    users[id] = socket.id
    console.log("a user connected", socket.id)

    socket.on("send-message", data => {
        console.log(
            `I'm ${id}, and I'm sending data to ${data.id} and its socket id is ${users[data.id]}`
        )

        io.to(users[data.id]).emit("receive-message", data.message)
    })

    socket.on("disconnect", () => {
        console.log("user disconnect")
    })
}
