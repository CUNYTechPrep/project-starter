'use strict';
const { users } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class users extends Model {}

  users.init({
    content: {
      type: DataTypes.STRING,
      validate: {
        len: [3, 250],
        notEmpty: true,
      }
    },
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
