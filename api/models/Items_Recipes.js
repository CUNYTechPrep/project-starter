'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
    class Items_Recipes extends Model { }

    Items_Recipes.init({
        Amount: {
            type: DataTypes.FLOAT,
            validate: {
                notEmpty: true,
                allowNull: false,
                isNumeric: true,
            }
        },
       
         
    }, {
        sequelize,
        modelName: 'items_recipes'
    });

    
    Items_Recipes.associate = (models) => {
        // associations can be defined here
    

    };

    return Items_Recipes;
    
};