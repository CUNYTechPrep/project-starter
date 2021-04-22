'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Group extends Model {}

  Group.init({
    groupID: {
      type: DataTypes.STRING,
      validate: {
        len: [8],
        notEmpty: true,
      }
    },
    members: {
        type: DataTypes.ARRAY,
        validate: {
            len: [1, 8],
            notEmpty: true,
        }
    },
    eventDate: {
        type: DataTypes.DATE
    },
    places: {
        type: DataTypes.ARRAY
    },
  }, {
    sequelize,
    modelName: 'group'
  });

  Group.associate = (models) => {
    // associations can be defined here
  };

  return Group;
};