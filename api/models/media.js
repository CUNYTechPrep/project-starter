'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
    class Media extends Model {}
    Media.init({
        name: {
            type: DataTypes.STRING,
            validate: {
                len: [3, 10],
            }
        },
        description: {
            type: DataTypes.STRING
        },
        photo: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true,
            }
        }, 
    }, {
        sequelize,
        modelName: 'media'
    });

     Media.associate = (models) => {
        // This adds TripID to Media 
        models.Media.belongsTo(models.Trip);
     };

    return Media;
};