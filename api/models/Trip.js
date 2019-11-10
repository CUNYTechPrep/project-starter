'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
    class Trip extends Model { }
    Trip.init({
        name: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true,
            }

        },
        description: {
            type: DataTypes.STRING,

        },
        coverphoto: {
            type: DataTypes.STRING, 
            validate: {
                notEmpty: true,
            }
        },
    }, {
        sequelize,
        modelName: 'trip'
    });

    Trip.associate = (models) => {
        // This adds UserID into the Trip Table
        models.Trip.belongsTo(models.User);
    };

    return Trip;
};
