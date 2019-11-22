'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
    class Users_Items extends Model { }

    Users_Items.init({
        
        qty: {
            type: DataTypes.FLOAT,
            validate: {
                
                notEmpty: true,
                allowNull: false,
                isNumeric: true,
                
            }
        },
        expiration: {
            type: DataTypes.DATE,
            
            validate: {
            
                notEmpty: true,
                allowNull: false,
                
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