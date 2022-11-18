"use strict";
const { Model } = require("sequelize");
const bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {}

  User.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        isNull: true,
        validate: { notEmpty: true },
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        isNull: false,
        validate: {
          notEmpty: true,
          isEmail: true,
        },
      },
      passwordHash: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.VIRTUAL,
        validate: {
          isLongEnough: (val) => {
            if (val.length < 7) {
              throw new Error("password has be longer than 7 characters");
            }
          },
        },
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );

  User.associate = (models) => {
    User.hasMany(models.House, {
      // foreignKey: 'user_id',
      // as: 'OwnerID',
      // allowNull: false
    });
  };

  User.beforeSave((user, options) => {
    if (user.password) {
      user.passwordHash = bcrypt.hashSync(user.password, 10);
      console.log(user.passwordHash);
    }
  });

  return User;
};
