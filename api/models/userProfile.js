'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class UserProfile extends Model {}

  UserProfile.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      firstName: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true
        }
      },
      lastName: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true
        }
      },
      school: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true
        }
      },
      email: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true
        }
      }
    },
    {
      sequelize,
      modelName: "userProfile"
    }
  );

  UserProfile.associate = (models) => {
    models.UserProfile.belongsTo(models.User);
  };

  return UserProfile;
};