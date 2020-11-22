"use strict"
const { Model } = require("sequelize")
const bcrypt = require("bcryptjs")

module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        toJSON() {
            return { ...this.get(), passwordHash: undefined }
        }
    }

    User.init(
        {
            studentId: { type: DataTypes.INTEGER },
            firstName: { type: DataTypes.STRING },
            lastName: { type: DataTypes.STRING },
            email: {
                type: DataTypes.STRING,
                unique: true,
                allowNull: false,
                validate: {
                    isEmail: true,
                },
            },
            school: { type: DataTypes.STRING },

            graduate_date: { type: DataTypes.DATEONLY },
            major: { type: DataTypes.STRING },

            dateOfBirth: { type: DataTypes.DATEONLY },
            bio: { type: DataTypes.TEXT },

            passwordHash: { type: DataTypes.STRING },
            password: { type: DataTypes.VIRTUAL },
        },
        {
            sequelize,
            modelName: "user",
        }
    )

    User.associate = models => {
        User.belongsToMany(User, {
            as: "firstUserFriends",
            foreignKey: "firstUserId",
            through: models.Friendship,
        })

        User.belongsToMany(User, {
            as: "secondUserFriends",
            foreignKey: "secondUserId",
            through: models.Friendship,
        })
    }

    User.beforeSave((user, options) => {
        if (user.password) {
            user.passwordHash = bcrypt.hashSync(user.password, 10)
        }
    })

    return User
}
