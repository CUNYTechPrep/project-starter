'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
    class Media extends Model {}
    Media.init({
        description: {
            type: DataTypes.STRING,
        },
        photo: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true,
            },
        }, 
        timedate: {
            type: DataTypes.DATE,
            validate: {
                notEmpty: true,
            },
        },
        lng: {
            type: DataTypes.FLOAT,
            validate: {
                notEmpty: true,
            },
        },
        lat: {
            type: DataTypes.FLOAT,
            validate: {
                notEmpty: true,
            },
        }
    }, {
        sequelize,
        modelName: 'media',
    });

     Media.associate = (models) => {
        // This adds TripID to Media 
        models.Media.belongsTo(models.Trip);
     };

    return Media;
};