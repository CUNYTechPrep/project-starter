"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Media extends Model { }

  Media.init(
    {
      MediaID: {
        type: DataTypes.STRING,
        primaryKey: true,
        validate: {
          notEmpty: true
        }
      },
      AvgRating: {
        type: DataTypes.REAL,  // do not store , calcuate on query
        defaultValue: 0,
        validate: {
          notEmpty: true
        }
      }

    },

    {
      sequelize,
      modelName: "Media",
    }
  );

  return Media;
};
