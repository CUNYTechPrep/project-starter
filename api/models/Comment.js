"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {}

 
  Comment.init(
    {
        

            Comments:{

                type:DataTypes.TEXT,
                validate:{
                 len:[1-200],
                 notEmpty:true,

                }
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
    // models.Comment.belongsTo(models.User); //adds a User column in Comment
  };

  return Comment;
};
