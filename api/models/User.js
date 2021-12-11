'use strict';
const { Model } = require('sequelize');
// const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    // getFullname() {
    //   return [this.firstName, this.lastName].join(' ');
    // }
  }

  User.init({
    username: {
      type: DataTypes.STRING,
      validate: {
        len: [5, 50],
        notEmpty: true,
      },
      unique: true,
    },
    firstName: {
        type: DataTypes.STRING,
        validate: {
          len: [2, 50],
          notEmpty: true,
        },
    },
    lastName: {
        type: DataTypes.STRING,
        validate: {
            len: [2, 50],
            notEmpty: true,
        },
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty:true
      }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [5, 50],
            notEmpty: true,
            isEmail: true
        },
        unique: true,
    },
    // passwordHash: { type: DataTypes.STRING },
    password: {
      type: DataTypes.VIRTUAL,
      validate: {
        isLongEnough: (val) => {
          if (val.length < 7) {
            throw new Error("Please choose a longer password");
          }
        },
      },
    }
  }, {
    sequelize,
    modelName: 'user'
  });

  User.associate = (models) => {
    // associations can be defined here

    models.User.hasOne(models.MatchProfile);
    models.User.hasMany(models.Message, {as: 'Sender', foreignKey: 'senderId'});
    models.User.hasMany(models.Message, {as: 'Recipient', foreignKey: 'recipientId'});
    models.User.hasMany(models.UserMatch, {as: 'CurrentUser', foreignKey: 'userId'});
    models.User.hasMany(models.UserMatch, {as: 'OtherUser', foreignKey: 'matchId'});
  };

  // User.beforeSave((user, options) => {
  //   if(user.password) {
  //     user.passwordHash = bcrypt.hashSync(user.password, 10);
  //   }
  // });

  return User;
};
