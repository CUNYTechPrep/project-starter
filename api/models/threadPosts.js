'use strict';
const { Model } = require('sequelize');
const { Sequelize } = require('.');

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
    //models.threadPosts.belongsTo(models.Forum, { as: 'thread' }); //So this would be one Thread to Many Posts relation
  };

  return threadPosts;
};
