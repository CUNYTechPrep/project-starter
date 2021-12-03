'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Match extends Model {}

  Match.init({
    outcome: {
      type: DataTypes.BOOLEAN,
    },
  }, {
    sequelize,
    modelName: 'match'
  });

  Match.associate = (models) => {
    // associations can be defined here

    models.Match.belongsToMany(models.User, {through: models.UserMatch});
  };

  return Match;
};