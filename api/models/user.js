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
        photo:{
            type: DataTypes.STRING
        }
        // TO-DO: store images with BLOB Datatype 
    }, {
        sequelize,
        modelName: 'user'
    });

    return User;
};