'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Message extends Model {}

  Message.init({
    messageBody: {
        type: DataTypes.TEXT,
        validate: {
            notEmpty: true,
        },
    }
  }, {
    sequelize,
    modelName: 'Message'
  });

  Message.associate = (models) => {
    // associations can be defined here

    models.Message.belongsTo(models.User, {as: 'Sender', foreignKey: 'senderId'});
    models.Message.belongsTo(models.User, {as: 'Recipient', foreignKey: 'recipientId'});
  };

  return Message;
};