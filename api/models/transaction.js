'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {}

  Transaction.init(
    {
      transactionID: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        field: 'transactionID',
        allowNull: false,
        autoIncrement: true,
      },
      sellerID: {
        type: DataTypes.INTEGER,
        field: 'sellerID',
        allowNull: false,
      },
      buyerID: {
        type: DataTypes.INTEGER,
        field: 'buyerID',
        allowNull: false,
      },
      productID: {
        type: DataTypes.INTEGER,
        field: 'productID',
        allowNull: false,
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
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "transaction"
    }
  );

  Transaction.associate = (models) => {
    Transaction.belongsTo(models.Product, {
      foreignKey: 'productID',
      foreignKeyConstraint: true,
    });
    Transaction.belongsTo(models.User, {
      foreignKey: 'buyerID',
      foreignKey: 'sellerID',
      foreignKeyConstraint: true,
    });
  };

  return Transaction;
};