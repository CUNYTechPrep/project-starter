"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Media extends Model { }

  Media.init(
    {
      MediaID: {
        type: DataTypes.STRING,
        primaryKey: true,
        
      },
      AvgRating: {
        type: DataTypes.REAL,  // do not store , calcuate on query
        defaultValue: 0,
       
      }

    },

    {
      sequelize,
      modelName: "Media",
    }
  );

  return Media;
};
