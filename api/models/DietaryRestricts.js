'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
    class DietaryRestricts extends Model { }

    DietaryRestricts.init({
        //timestamps: false,
        dietaryrestrictname: {
            type: DataTypes.STRING,
            unique: true,
            validate: {
              notEmpty: true,
              allownull: false,
            }
          },
        
         
    }, {
        sequelize,
        modelName: 'dietaryrestricts',
        timestamps: false,
    });

    
    DietaryRestricts.associate = (models) => {
        
        // associations can be defined here
        models.Dietaryrestricts.belongsToMany(models.Users, {through: 'users_dietaryrestricts'});
        models.Dietaryrestricts.belongsToMany(models.Items, {through: 'items_dietaryrestricts'});


    };

    return DietaryRestricts;
    
};