'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {}

  Transaction.init(
    {
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
    },
    {
      sequelize,
      modelName: "transaction"
    }
  );

  Transaction.associate = (models) => {
    models.Transaction.belongsTo(models.User);
    models.Transaction.hasMany(models.Product);
  };

  return Transaction;
};