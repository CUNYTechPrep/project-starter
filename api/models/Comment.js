"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {}

 
  Comment.init(
    {
         Content:{
          type:DataTypes.STRING,
            validate: {
            len: [3, 250],
           },
            }
    },
    {
      sequelize,
      modelName: "Comment",
    }
  );



  Comment.associate = (models) => {
    // associations can be defined here
     models.Comment.belongsTo(models.Media); //adds a media column in Comment 
     //models.Comment.belongsTo(models.User); //adds a User column in Comment
  };

  return Comment;
};
