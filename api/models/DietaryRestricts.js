'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
    class DietaryRestricts extends Model { }

    DietaryRestricts.init({
        DietaryRestrictName: {
            type: DataTypes.STRING,
            unique: true,
            validate: {
              len: [10],
              notEmpty: true,
              allownull: false,
            }
          },
        
         
    }, {
        sequelize,
        modelName: 'dietaryrestricts'
    });

    
    DietaryRestricts.associate = (models) => {
        console.log(models);
        // associations can be defined here
        models.Dietaryrestricts.belongsToMany(models.Users, {through: 'users_dietaryrestricts'});
        models.Dietaryrestricts.belongsToMany(models.Items, {through: 'items_dietaryrestricts'});


    };

    return DietaryRestricts;
    
};