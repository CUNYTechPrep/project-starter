'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
    class Recipes extends Model { }

    Recipes.init({
        description: {
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
        models.Recipes.belongsToMany(models.Users_Items, {through: 'UsersItems_Recipes'});

    };

    return Recipes;
    
};