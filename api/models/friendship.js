"use strict"
const { Model } = require("sequelize")

module.exports = (sequelize, DataTypes) => {
    class Friendship extends Model {}
    Friendship.init(
        {
            firstUserId: { type: DataTypes.INTEGER, primaryKey: true },
            secondUserId: { type: DataTypes.INTEGER, primaryKey: true },
            pendingState: { type: DataTypes.INTEGER },
        },
        {
            sequelize,
            modelName: "friendship",
        }
    )

    return Friendship
}
