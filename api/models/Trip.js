'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
    class Trip extends Model {}
    Trip.init({
        name: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true
            }
        },
        description: {
            type: DataTypes.STRING,
            validate: {
                len: [3, 500],
                notEmpty: true,
            }
        },
        coverPhoto: {
            type: DataTypes.STRING, //What data type to carry images?
            validate: {
                len: [3, 10],
                notEmpty: true,
                isEmail: true,
            }
        }, 
        bio: {
            type: DataTypes.TEXT
        },
    }, {
        sequelize,
        modelName: 'Trip'
    });

     Trip.associate = (models) => {
        models.Trip.belongsTo(models.Users);
        


        // associations can be defined here
        // This will add TripId as a column to the Trip table
         
     };

    return Trip;
};
