'use strict';
const { Model } = require('sequelize');
const { User } = require('./User')
const { Match } = require('./Match')


module.exports = (sequelize, DataTypes) => {
  class UserMatch extends Model {}

  UserMatch.init({
    userId: {
        type: DataTypes.INTEGER,
        references: {
          model: User,
          key: 'id'
        }
    },
    matchId: {
        type: DataTypes.INTEGER,
        references: {
            model: Match,
            key: 'id'
        }
    },
    outcome: {
        type: DataTypes.BOOLEAN
    }
  }, {
    sequelize,
    modelName: 'UserMatch'
  });

  return UserMatch;
};