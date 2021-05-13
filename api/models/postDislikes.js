'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class PostDislikes extends Model {}

  PostDislikes.init({
      

  }, {
    sequelize,
    modelName: 'postDislikes'
  });

  return PostDislikes
}