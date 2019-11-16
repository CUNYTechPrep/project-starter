'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
    class Users_Items extends Model { }

    Users_Items.init({
        
        Amount: {
            type: DataTypes.INTEGER,
            validate: {
                
                notEmpty: true,
                allowNull: false,
                isNumeric: true,
                
            }
        },
        Expiration: {
            type: DataTypes.DATE,
            
            validate: {
            
                notEmpty: true,
                allowNull: false,
                
            }
        },
         
    }, {
        sequelize,
        modelName: 'Users_Items'
    });

    
    Users_Items.associate = (models) => {
        // associations can be defined here
        models.Users_Items.belongsToMany(models.Recipes, {through: 'UsersItems_Recipes'});

    };

    return Users_Items;
    
};