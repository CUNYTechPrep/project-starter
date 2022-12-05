"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Goal extends Model {}

  Goal.init(
    {
      targetDate: {
        type: DataTypes.DATEONLY,
        validate: {
          isDate: true,
        },
      },
      targetFund: {
        type: DataTypes.FLOAT,
        validate: {
          isNumeric: true,
        },
      },
      totalMinusIncome: {
        type: DataTypes.FLOAT,
        validate: {
          isNumeric: true,
        },
      },
    },
    {
      sequelize,
      modelName: "Goal",
    }
  );

  Goal.associate = (models) => {
    // associations can be defined here
  };

  return Goal;
};
