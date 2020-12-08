"use strict"
const { Model } = require("sequelize")

module.exports = (sequelize, DataTypes) => {
    class Message extends Model {}
    Message.init(
        {
            senderId: { type: DataTypes.INTEGER },
            receiverId: { type: DataTypes.INTEGER },
            content: { type: DataTypes.TEXT },
        },
        {
            sequelize,
            modelName: "message",
        }
    )

    return Message
}
