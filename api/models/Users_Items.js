'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
    class Users_Items extends Model { }

    Users_Items.init({
        qty: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                
                notEmpty: true,
                isNumeric: true,
                
            }
        },
        expiration: {
            type: DataTypes.DATE,
            allowNull: false,
            
            validate: {
            
                notEmpty: true,
                
                
            }
        },
         
    }, {
        sequelize,
        modelName: 'users_items',
        timestamps: false,
    });

    
    Users_Items.associate = (models) => {
        // associations can be defined here
    

    };

    return Users_Items;
    
};