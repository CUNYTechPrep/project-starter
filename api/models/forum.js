'use strict';
const { Model } = require('sequelize');
const { Sequelize } = require('.');
require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Forum extends Model {}
  Forum.init(
    {
      category: {
        type: DataTypes.STRING,
        validate: {
          len: [3, 10],
          notEmpty: true,
        },
      },
      threadTitle: {
        type: DataTypes.STRING,
        validate: {
          len: [3, 100],
          notEmpty: true,
        },
      },
    },
    {
      sequelize,
      modelName: 'forum',
    }
  );

  Forum.associate = (models) => {
    //models.Forum.belongsTo(models.User, { as: 'author' });
    
    
    // models.Forum.hasMany(models.threadPosts, { as: 'thread_posts' });
  };

  return Forum;
};
