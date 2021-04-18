'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class User extends Model {}
  
    User.init({
        userName: {
            type : DataTypes.STRING,
            primaryKey: true
        },

        password: {
            type : DataTypes.STRING,
        },

        email: {
            type : DataTypes.STRING,
        },

        fName: {
            type : DataTypes.STRING,
        },

        lName: {
            type : DataTypes.STRING,
        },

        birthDate: {
            type : DataTypes.DATEONLY,
        },

        profilePic: {
            type : DataTypes.TEXT,
        },

        status: {
            type : DataTypes.BOOLEAN,
        },

    }, {
      sequelize,
      modelName: 'user'
    });
  
    User.associate = (models) => {
      // associations can be defined here

      //this will add userName to Post 
      //Instances of User will get the accessors getPosts and setPosts.
      models.User.hasMany(models.Post , {foreignKey: 'fkUserName'})


      //this will add userName to Comment 
      //Instances of User will get the accessors getComments and setComments.
      models.User.hasMany(models.Comment , {foreignKey: 'fkUserName'})
      

      
    };
  
    return User;
  };