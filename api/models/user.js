'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class User extends Model {}

  User.init(
    {
      userID: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        validate: {
          len: [5, 10],
          notEmpty: true
        }
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "user"
    }
  );

  User.associate = (models) => {
    // models.User.belongsTo(models.UserProfile);
    User.hasOne(models.UserProfile, {
      foreignKey: 'userID',
      foreignKeyConstraint: true,
    });
    User.hasMany(models.Product, {
      foreignKey: 'sellerID',
      foreignKeyConstraint: true,
    });
    User.hasMany(models.Transaction, {
      foreignKey: 'sellerID',
      foreignKey: "buyerID",
      foreignKeyConstraint: true,
    });
  };

  return User;
};