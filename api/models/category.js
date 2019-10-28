'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Category extends Model {}

  Category.init(
    {
      categoryName: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true
        }
      }
    },
    {
      sequelize,
      modelName: "category"
    }
  );

  Category.associate = (models) => {
  };

  return Category;
};