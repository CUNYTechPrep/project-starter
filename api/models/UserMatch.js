'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class UserMatch extends Model {}

  UserMatch.init({
    outcome: {
        type: DataTypes.BOOLEAN
    }
  }, {
    sequelize,
    modelName: 'UserMatch'
  });

  UserMatch.associate = (models) => {
    // associations can be defined here
    
    models.UserMatch.belongsTo(models.User, {as: 'CurrentUser', foreignKey: 'userId'});
    models.UserMatch.belongsTo(models.User, {as: 'OtherUser', foreignKey: 'matchId'});
  };

  return UserMatch;
};