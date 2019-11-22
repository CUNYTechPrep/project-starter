'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class users extends Model {}

  users.init({
    username: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      }
    },
    password : {
      type: DataTypes.STRING,
      validate: {
        notEmpty : true
      }
    },
    email : {
      type : DataTypes.STRING,
      validate : {
        notEmpty: true
      }
    }
  },

  {
    sequelize,
    modelName: 'users'
  });

  users.associate = (models) => {
    // associations can be defined here
  };

  return users;
};
