'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {}

  User.init({
    username: {
      type: DataTypes.STRING,
      validate: {
        len: [5, 50],
        notEmpty: true,
      },
      unique: true,
    },
    firstName: {
        type: DataTypes.STRING,
        validate: {
          len: [2, 50],
          notEmpty: true,
        },
    },
    lastName: {
        type: DataTypes.STRING,
        validate: {
            len: [2, 50],
            notEmpty: true,
        },
    },
    dob: {
        type: DataTypes.DATEONLY,
    },
    gender: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
        validate: {
            len: [5, 50],
            notEmpty: true,
        },
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        validate: {
            len: [5, 50],
            notEmpty: true,
        }
    },
  }, {
    sequelize,
    modelName: 'user'
  });

  User.associate = (models) => {
    // associations can be defined here

    models.User.hasOne(models.MatchProfile);
    models.User.hasMany(models.Message, {as: 'Sender', foreignKey: 'senderId'});
    models.User.hasMany(models.Message, {as: 'Recipient', foreignKey: 'recipientId'});
    models.User.hasMany(models.UserMatch, {as: 'CurrentUser', foreignKey: 'userId'});
    models.User.hasMany(models.UserMatch, {as: 'OtherUser', foreignKey: 'matchId'});
  };

  return User;
};