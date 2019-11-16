'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
    class Items extends Model { }

    Items.init({
        ItemName: {
            type: DataTypes.STRING,
            unique: true,
            validate: {
                len: [3, 50],
                notEmpty: true,
                allowNull: false,
            }
        },
       
         
    }, {
        sequelize,
        modelName: 'Items'
    });

    
    Items.associate = (models) => {
        // associations can be defined here
        models.Items.belongsToMany(models.Users, {through: 'Users_Items'});
        models.Items.belongsToMany(models.Recipes, {through: 'Items_Recipes'});
        models.Items.belongsToMany(models.DietaryRestricts, {through: 'Items_DietaryRestricts'});

    };

    return Items;
    
};