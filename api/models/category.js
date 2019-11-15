'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Category extends Model {}

  Category.init(
    {
      categoryID: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        field: 'categoryID',
        allowNull: false,
        autoIncrement: true,
      },
      categoryName: {
        type: DataTypes.STRING,
        filed: 'categoryName',
      }
    },
    {
      sequelize,
      timestamps : false,
      modelName: "category"
    }
  );

  Category.associate = (models) => {
    Category.hasOne(models.Product, {
      foreignKey: 'categoryID',
      foreignKeyConstraint: true,
    });
  };

  return Category;
};