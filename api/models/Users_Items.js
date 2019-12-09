'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
    class Users_Items extends Model { }

    Users_Items.init({
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        item_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        qty: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                
                notEmpty: true,
<<<<<<< HEAD
                
=======
>>>>>>> f5cc572c44aeefc1df1648ca3368da43f2d42abf
                isNumeric: true,
                
            }
        },
        expiration: {
            type: DataTypes.DATE,
            allowNull: false,
<<<<<<< HEAD
=======
            
>>>>>>> f5cc572c44aeefc1df1648ca3368da43f2d42abf
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