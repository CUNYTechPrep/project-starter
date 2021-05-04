"use strict";
const { User } = require("../models");
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Group extends Model {}

  Group.init(
    {
      groupId: {
        type: DataTypes.STRING,
        validate: {
          len: [10, 20],
          notEmpty: true,
        },
        unique: true,
      },
      groupName: {
        type: DataTypes.STRING,
        defaultValue: "UnNamedGroup",
      },
      members: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
      places: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
    },
    {
      sequelize,
      modelName: "group",
    }
  );

  Group.associate = (models) => {
    // associations can be defined here
    models.Group.belongsToMany(models.User, { through: "GroupUser" });
  };

  return Group;
};
