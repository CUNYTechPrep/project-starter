"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Property extends Model {}

  Property.init(
    {
        address: {
          type: DataTypes.STRING,
        },
        electric:{
          type: DataTypes.INTEGER, 
        }, 
        gas:{
          type: DataTypes.INTEGER,
        }, 
        mortgage:{
          type: DataTypes.INTEGER,
        }, 
        rent: {
          type: DataTypes.INTEGER,
        }, 
        tenanted: {
          type: DataTypes.BOOLEAN,
        }, 
        water: {
          type: DataTypes.INTEGER,
        }
    },
    {
      sequelize,
      modelName: "Property",
    }
  );

  Property.associate = (models) => {
    // associations can be defined here
  };

  return Property;
};
