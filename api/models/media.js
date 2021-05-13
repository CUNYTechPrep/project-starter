'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Media extends Model {}
  
    Media.init({
      link : {
          type : DataTypes.TEXT
      }
  
    }, {
      sequelize,
      modelName: 'media'
    });
  
    Media.associate = (models) => {
      //This will add postId as a column to the Media table
      //Instances of Media will get the accessors getPost and setPost
        models.Media.belongsTo(models.Post);
    };
  
    return Media;
  };