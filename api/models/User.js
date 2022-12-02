// The User table : [UserId | JoinDate | Email | Username| Pw]
"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {}


/// Userid and Joindate is created by postgresQl
 
  User.init(
    {
      email: {
        type: DataTypes.STRING,
        validate: {
         isEmail: true,
          notEmpty: true,
          
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
      passWord:{
        type: DataTypes.STRING,
        validate: {
            // at least 1 number, 1 lowercase, 1 Uppercase, symbol, and between 8-50 length
            is:["^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\\S+$).{8-25}$"],
            notEmpty:true,
        }
          

      }
    },
    {
      sequelize,
      modelName: "User",
    }
  );



  User.associate = (models) => {
    // associations can be defined here

  }
  return User;
};
