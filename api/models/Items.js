'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
    class Items extends Model { }

    Items.init({
        
        itemname: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                len: [3, 50],
<<<<<<< HEAD
                notEmpty: true,
                
=======
                notEmpty: true
>>>>>>> f5cc572c44aeefc1df1648ca3368da43f2d42abf
            }
        },
       
         
    }, {
        sequelize,
        modelName: 'items',
        timestamps: false,
    });

    
    Items.associate = (models) => {
        //console.log(models);
        // associations can be defined here
        models.Items.belongsToMany(models.Users, {through: 'users_items'});
        models.Items.belongsToMany(models.Recipes, {through: 'items_recipes'});
        models.Items.belongsToMany(models.Dietaryrestricts, {through: 'items_dietaryrestricts'});

    };

    return Items;
    
};