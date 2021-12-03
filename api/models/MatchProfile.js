'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class MatchProfile extends Model {}

  MatchProfile.init({
    age: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: true
      }
    },
    hobby: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    bio: {
      type: DataTypes.STRING,
      validate: {
          len: [1, 250],
      },
    },
  }, {
    sequelize,
    modelName: 'MatchProfile'
  });

  MatchProfile.associate = (models) => {
    // associations can be defined here

    models.MatchProfile.belongsTo(models.User);
  };

  return MatchProfile;
};