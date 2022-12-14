
"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Rating extends Model {}

// The User table : [RatingId | MediaID | UsrID | Rating]
/// RatingiD is created by postgresQl
 
  Rating.init(
    {
      
      RatingValue:{
        type: DataTypes.INTEGER,
        defaultValue:0,
        validate: {
           notEmpty:true,  //just a test
        },
      },
    },
    {
      sequelize,
      modelName: "Rating",
    }
  );


 
   Rating.associate = (models) => {
    // associations can be defined here
     models.Rating.belongsTo(models.Media); //adds a mediaId column in Rating 
   //  models.Rating.belongsTo(models.User); //adds a Userid column in Rating 
   };

  return Rating;
};
