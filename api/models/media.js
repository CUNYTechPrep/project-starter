'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
    class Media extends Model {}
    Media.init({
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
            type: DataTypes.STRING, 
            validate: {
                len: [3, 10],
                notEmpty: true,
                isEmail: true,
            }
        }, 
    }, {
        sequelize,
        modelName: 'Media'
    });

     Media.associate = (models) => {
        // This adds TripID to Media 
        models.Media.belongsTo(models.Trip);
     };

    return Media;
};