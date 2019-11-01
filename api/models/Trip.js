'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
    class Trip extends Model { }
    Trip.init({
        name: {
            type: DataTypes.STRING,

        },
        description: {
            type: DataTypes.STRING,

        },
        coverPhoto: {
            type: DataTypes.STRING, //What data type to carry images?
        },
    }, {
        sequelize,
        modelName: 'Trip'
    });

    Trip.associate = (models) => {
        // This adds UserID into the Trip Table
        models.Trip.belongsTo(models.User);

        // This adds TripID into the Media Table
        models.Trip.hasMany(models.Media);
    };

    return Trip;
};
