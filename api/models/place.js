"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Place extends Model {}

  Place.init(
    {
      name: {
        type: DataTypes.STRING,
        validate: {
          len: [1, 100],
          notEmpty: true,
        },
      },
      types: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        // validate: {
        //   len: [1, 20],
        //   notEmpty: true,
        // },
      },
      place_id: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      //   votes: {
      //     type: DataTypes.INTEGER,
      //   },
    },
    {
      sequelize,
      modelName: "place",
    }
  );

  Place.associate = (models) => {
    // associations can be defined here
  };

  return Place;
};
