'use strict';
const {Model} = require ('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Bookmark extends Model {}

    Bookmark.init({
        userUUID: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true,   
            }
        },
        schoolDBID: {
            type: DataTypes.STRING, 
            validate: {
                notEmpty: true,  
            }
        },
        schoolName: {
            type: DataTypes.STRING, 
            validate: {
                notEmpty: true,
            },
        }
    }, {
        sequelize, 
        modelName: 'bookmark'
    });

    return Bookmark;
}