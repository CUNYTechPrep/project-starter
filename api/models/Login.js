"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Login extends Model {}

  Login.init(
    {
      username: {
        type: DataTypes.STRING,
        validate: {
          len: [3, 250],
          notEmpty: true,
          unique: true,
        },
      },
      // For UI: Provide flag for the minimum length required of user
      password: {
        type: DataTypes.STRING,
        validate: {
          len: [8, 250],
          notEmpty: true,
          // isUUID: 4,     // Use after implementing password encryption
        },
      },
    },
    {
      sequelize,
      modelName: "Login",
    }
  );

  Login.associate = (models) => {
    // associations can be defined here
  };

  return Login;
};
