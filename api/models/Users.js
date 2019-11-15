'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
    class Users extends Model { }

    Users.init({
        UserName: {
            type: DataTypes.STRING,
            unique: true,
            validate: {
                len: [3, 50],
                notEmpty: true,
                notNull: true,
            }
        },
        UserPassword: {
            type: DataTypes.STRING,
            validate: {
                len: [8, 50],
                notEmpty: true,
                notNull: true,
                isIn: [['@', '!','#','$','%','&','^','<','>','/','?','+']],
                isLowercase: true,        
                isUppercase: true,
            }
        },
        Email: {
            type: DataTypes.STRING,
            unique: true,
            validate: {
                //len: [3, 50],
                notEmpty: true,
                notNull: true,
                isEmail: true,
                
            }
        },
        Phonenumber: {
            type: DataTypes.INTEGER,
            unique: true,
            validate: {
                //len: 10,
                notEmpty: true,
                notNull: true,
            }
        },
        Auth_Token: {
            type: DataTypes.STRING,
            unique: true,
            validate: {
                //len: 50,
                notEmpty: true,
                notNull: true,
            }
        },
        
    }, {
        sequelize,
        modelName: 'users'
    });

    
    Users.associate = (models) => {
        // associations can be defined here
        models.Users.belongsToMany(models.Items, {through: 'Users_Items'});
        models.Users.belongsToMany(models.DietaryRestricts, {through: 'Users_DietaryRestricts'});

    };
    

    return Users;
    
};