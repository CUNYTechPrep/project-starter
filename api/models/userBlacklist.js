'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class UserBlacklist extends Model {}

  UserBlacklist.init({
    email: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      }
    },
  }, {
    sequelize,
    modelName: 'userBlacklist'
  });

  UserBlacklist.associate = (models) => {
    // associations can be defined here
  };

  return UserBlacklist;
};