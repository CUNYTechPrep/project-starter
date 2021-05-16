'use strict';
const { Model } = require('sequelize');
const { Sequelize } = require('.');

module.exports = (sequelize, DataTypes) => {
  class ThreadPosts extends Model {}
  ThreadPosts.init(
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

  ThreadPosts.associate = (models) => {
    models.ThreadPosts.belongsTo(models.Forum, { as: 'thread' }); //So this would be one Thread to Many Posts relation
    models.ThreadPosts.belongsTo(models.User, { as: 'author' });
  };

  return ThreadPosts;
};
