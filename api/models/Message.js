'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Message extends Model {}

  Message.init({
    senderId: {
        type: DataTypes.INTEGER,
    },
    recipientId: {
        type: DataTypes.INTEGER,
    },
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

    models.Message.belongsTo(models.User);
  };

  return Message;
};