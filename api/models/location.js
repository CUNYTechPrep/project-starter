'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Location extends Model {}
  
    Location.init({
        streetAddress: {
            type : DataTypes.STRING
        },

        state: {
            type : DataTypes.STRING,
        },

        city: {
            type : DataTypes.STRING,
        },

        zipCode: {
            type : DataTypes.STRING,
        },

        lat: {
            type: DataTypes.FLOAT,
            validate:{
                notEmpty: true,
            }
        },

        lng: {
            type: DataTypes.FLOAT,
            validate:{
                notEmpty: true,
            }
        },

    }, {
      sequelize,
      modelName: 'location'
    });
  
    Location.associate = (models) => {
      // associations can be defined here

      //this will add locationId to Post 
      //Instances of Post will get the accessors getPost and setPost.
      models.Location.hasMany(models.Post)
      
    };
  
    return Location;
  };