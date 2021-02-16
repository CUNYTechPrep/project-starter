"use strict"
const { Model } = require("sequelize")

module.exports = (sequelize, DataTypes) => {
    class Course extends Model {}

    Course.init(
        {
            value: { type: DataTypes.STRING },
            label: { type: DataTypes.STRING }
        },
        {
            sequelize,
            modelName: "course",
        }
    )

    Course.associate = models => {
        const { User } = models

        Course.belongsToMany(User, {
            as: "studentsEnrolled",
            through: "student_course",
        })

        User.belongsToMany(Course, {
            as: "coursesTaken",
            through: "student_course",
        })
    }

    Course.beforeSave((user, options) => {})

    return Course
}
