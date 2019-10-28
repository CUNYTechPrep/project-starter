'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Product extends Model {}

  Product.init(
    {
      productName: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true
        }
      },
      price: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: true
        }
      },
      amount: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: true
        }
      },
      description: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true
        }
      },
      image: {
        type: DataTypes.BLOB,
        validate: {
          notEmpty: true
        }
      },
    },
    {
      sequelize,
      modelName: "product"
    }
  );

  Product.associate = (models) => {
    models.Product.belongsTo(models.User);
    models.Product.belongsTo(models.Category);
  };

  return Product;
};