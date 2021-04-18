'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Comment extends Model {}
  
    Comment.init({
      body : {
          type : DataTypes.TEXT
      }
  
    }, {
      sequelize,
      modelName: 'comment'
    });
  
    Comment.associate = (models) => {
    // associations can be defined here

    // This will add postId as a column to the Comment table
    //Instances of Comment will get the accessors getPost and setPost.
    models.Comment.belongsTo(models.Post);

    //this will add userName to Comment 
    //Instances of Comment will get the accessors getUser and setUser.
    models.Comment.belongsTo(models.User, {foreignKey: 'fkUserName'});
    };
  
    return Comment;
  };