'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
    class DietaryRestricts extends Model { }

    DietaryRestricts.init({
        name: {
            type: DataTypes.STRING,
            unique: true,
            validate: {
              len: [10],
              notEmpty: true,
              notNull: true
            }
          },
        
         
    }, {
        sequelize,
        modelName: 'DietaryRestricts'
    });

    
    Items.associate = (models) => {
        // associations can be defined here
        models.DietaryRestricts.belongsToMany(models.Users, {through: 'Users_DietaryRestricts'});

    };

    return Items;
    
};