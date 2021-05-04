"use strict";
const { Group } = require("../models");
const { Model } = require("sequelize");
//const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    getFullname() {
      return [this.firstName, this.lastName].join(" ");
    }
  }

  User.init(
    {
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
      //passwordHash: { type: DataTypes.STRING },
      password: {
        //type: DataTypes.VIRTUAL,
        type: DataTypes.STRING,
        validate: {
          isLongEnough: (val) => {
            if (val.length < 7) {
              throw new Error("Please choose a longer password");
            }
          },
        },
      },
      profilePicture: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "user",
    }
  );

  User.associate = (models) => {
    // associations can be defined here
    models.User.belongsToMany(models.Group, { through: "GroupUser" });
  };

  //   User.beforeSave((user, options) => {
  //     if (user.password) {
  //       user.passwordHash = bcrypt.hashSync(user.password, 10);
  //     }
  //   });
  return User;
};
