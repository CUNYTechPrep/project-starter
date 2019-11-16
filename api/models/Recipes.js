'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
    class Recipes extends Model { }

    Recipes.init({
        
        recipesname: {
            type: DataTypes.STRING,
            unique: true,
            validate: {
                len: [3, 50],
                notEmpty: true,
                allowNull: false,
            }
        },

        instruction: {
            type: DataTypes.TEXT,
            unique: true,
            validate: {
                
                notEmpty: true,
                allowNull: false,
            }
        },        
    }, {
        sequelize,
        modelName: 'recipes',
        timestamps: false,
    });

    
    Recipes.associate = (models) => {
        // associations can be defined here
        models.Recipes.belongsToMany(models.Items, {through: 'items_recipes'});

    };

    return Recipes;
    
};