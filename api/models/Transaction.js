"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {}

  Transaction.init(
    {
      // Get this data from MicroPost
      /*
      itemName: {
        type: DataTypes.STRING,
        validate: {
          len: [1, 250],
          notEmpty: true,
        },
      },
      */
      price: {
        type: DataTypes.FLOAT,
        validate: {
          isNumeric: true,
        },
      },
    },
    {
      sequelize,
      modelName: "Transaction",
    }
  );

  Transaction.associate = (models) => {
    // associations can be defined here
  };

  return Transaction;
};
