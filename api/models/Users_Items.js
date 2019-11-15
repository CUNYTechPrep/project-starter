'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
    class Users_Items extends Model { }

    Users_Items.init({
        
        Amount: {
            type: DataTypes.INTEGER,
            validate: {
                
                notEmpty: true,
                notNull: true,
                isNumeric: true,
                
            }
        },
        Expiration: {
            type: DataTypes.DATE,
            
            validate: {
            
                notEmpty: true,
                notNull: true,
                
            }
        },
         
    }, {
        sequelize,
        modelName: 'Users_Items'
    });

    
    Items.associate = (models) => {
        // associations can be defined here
        models.Users_Items.belongsToMany(models.Recipes, {through: 'UsersItems_Recipes'});

    };

    return Items;
    
};