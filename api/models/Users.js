'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
    class User extends Model { }

    User.init({
        username: {
            type: DataTypes.STRING,
            validate: {
                len: [3, 10],
                notEmpty: true,
                unique: true 
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
        // TO-DO: store images with BLOB Datatype 
    }, {
        sequelize,
        modelName: 'User'
    });

    // User.associate = (models) => {
        // associations can be defined here
        // This will add userId as a column to the Trip table
        // models.User.belongsTo(models.Trip);
    // };

    return User;
};