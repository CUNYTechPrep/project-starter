'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
    class Items_Recipes extends Model { }

    Items_Recipes.init({
        //timestamps: false,
        recipe_id: {
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
                isNumeric: true,
            }
        },
       
         
    }, {
        sequelize,
        modelName: 'items_recipes',
        timestamps: false,
    });

    
    Items_Recipes.associate = (models) => {
        // associations can be defined here
        

    };

    return Items_Recipes;
    
};