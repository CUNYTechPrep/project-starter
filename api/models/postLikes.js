'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class PostLikes extends Model {}

  PostLikes.init({
      

  }, {
    sequelize,
    modelName: 'postLikes'
  });

  return PostLikes
}