// The User table : [UserId | JoinDate | Email | Username| Pw]
"use strict";
const { Model } = require("sequelize");
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {}


/// Userid and Joindate is created by postgresQl
 
  User.init(
    {
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
         isEmail: true,
        },
        unique: {
            args: true,
            msg: 'This Email exists already in our Database!'
        }
      },
      userName:{
        type:DataTypes.STRING,
        validate:{
            len:[6,10],
            isAlphanumeric:true,
            notEmpty: true,
          
        },
        unique: {
            args: true,
            msg: 'Username taken!'
        },
      },
      passwordHash: { type: DataTypes.STRING},
      password: {
        type: DataTypes.VIRTUAL,
        validate: {
          isLongEnough: (val) => {
            if (val.length < 7) {
              throw new Error("Please choose a longer password")
            }
          },
        },
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );

  User.associate = (models) => {
    // associations can be defined here

  };

  User.beforeSave((user, options) => {
    if(user.password) {
      user.passwordHash = bcrypt.hashSync(user.password, 10);
    }
  });

  return User;
};