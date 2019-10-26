'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
    class Trip extends Model { }

    Trip.init({
        tripname: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true
            }
        },
        password: {
            type: DataTypes.STRING,
            validate: {
                len: [3, 10],
                notEmpty: true,
            }
        },
        email: {
            type: DataTypes.STRING,
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

    // Trip.associate = (models) => {
        // associations can be defined here
        // This will add TripId as a column to the Trip table
        // models.Trip.belongsTo(models.Trip);
    // };

    return Trip;
};
