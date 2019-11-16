'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
    class Recipes extends Model { }

    Recipes.init({

        RecipeName: {
            type: DataTypes.STRING,
            unique: true,
            validate: {
                len: [3, 50],
                notEmpty: true,
                allowNull: false,
            }
        },

        Description: {
            type: DataTypes.TEXT,
            unique: true,
            validate: {
                //len: [3, 50],
                notEmpty: true,
                allowNull: false,
            }
        },        
    }, {
        sequelize,
        modelName: 'Recipes'
    });

    
    Recipes.associate = (models) => {
        // associations can be defined here
        models.Recipes.belongsToMany(models.Items, {through: 'Items_Recipes'});

    };

    return Recipes;
    
};