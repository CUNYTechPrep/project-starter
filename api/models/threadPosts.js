'use strict';
const { Model } = require('sequelize');
const { Sequelize } = require('.');
require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class threadPosts extends Model {}
  threadPosts.init(
    {
      content: {
        type: DataTypes.STRING,
        validate: {
          len: [3, 500],
          notEmpty: true,
        },
      },
      title: {
        type: DataTypes.STRING,
        validate: {
          len: [3, 100],
          notEmpty: true,
        },
      },
    },
    {
      sequelize,
      modelName: 'threadPosts',
    }
  );

  threadPosts.associate = (models) => {
    // models.threadPosts.belongsTo(models.Swipe, { as: 'author' });
  };

  return threadPosts;
};
