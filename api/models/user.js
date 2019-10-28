'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class User extends Model {}

  User.init(
    {
      username: {
        type: DataTypes.STRING,
        validate: {
          len: [3, 10],
          notEmpty: true
        }
      },
      password: {
        type: DataTypes.STRING,
        validate: {
          len: [5, 10],
          notEmpty: true
        }
      }
    },
    {
      sequelize,
      modelName: "user"
    }
  );

  User.associate = (models) => {
    // models.User.belongsTo(models.UserProfile);
  };

  return User;
};