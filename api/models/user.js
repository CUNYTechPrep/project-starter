"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {}

  User.init(
    {
      userID: {
        type: DataTypes.STRING,
        validate: {
          len: [3, 250],
          notEmpty: true,
        },
      },
      emailAddress: {
        type: DataTypes.STRING,
        validate: {
          len: [5, 100],
          notEmpty: true,
        },
      },
      // groups: {
      //     type: DataTypes.ARRAY,
      // },
      password: {
        type: DataTypes.STRING,
        validate: {
          len: [8, 100],
          notEmpty: true,
        },
      },
    },
    {
      sequelize,
      modelName: "user",
    }
  );

  User.associate = (models) => {
    // associations can be defined here
  };

  return User;
};
