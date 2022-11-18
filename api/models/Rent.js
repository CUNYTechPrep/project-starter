"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Rent extends Model {}

  Rent.init(
    {
      amount: {
        type: DataTypes.INTEGER,
      },
      recieved: {
        type: DataTypes.BOOLEAN,
      },
      dueDate: {
        type: DataTypes.DATE,
        validate: {},
      },
    },
    {
      sequelize,
      modelName: "Rent",
      // tableName:"RentTable"
    }
  );

  Rent.associate = (models) => {
    Rent.belongsTo(models.House, {
      foreignKey: "houseId",
      as: "house",
      allowNull: false,
    });
  };

  return Rent;
};
