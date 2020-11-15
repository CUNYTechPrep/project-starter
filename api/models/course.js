"use strict"
const { Model } = require("sequelize")

module.exports = (sequelize, DataTypes) => {
    class Course extends Model {}

    Course.init(
        {
            firstName: { type: DataTypes.STRING },
            lastName: { type: DataTypes.STRING },
        },
        {
            sequelize,
            modelName: "course",
        }
    )

    Course.associate = models => {}

    Course.beforeSave((user, options) => {})

    return Course
}
