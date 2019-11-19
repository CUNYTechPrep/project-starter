'use strict';
const { Model } = require('sequelize');
const bcrypt = require('bcryptjs');


module.exports = (sequelize, DataTypes) => {
    class Users extends Model { }

    Users.init({
        username: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                len: [3, 50],
                notEmpty: true,
                //allowNull: false,
            }
        },
        password: {
            type: DataTypes.VIRTUAL,
            allowNull: false,
            validate: {
                len: [8, 50],
                notEmpty: true,
                //allowNull: false,
                //isIn: [['@', '!','#','$','%','&','^','<','>','/','?','+']],
                is: {
                    args: "(?=.*[a-z])",
                    msg: "One lowercase character please."
                },
                is: {
                    args: "(?=.*[A-Z])",
                    msg: "One Uppercase character please."
                },
            //    is: { 
            //        args: "(?=.*\W)",
            //        msg: "One $peci@l character please."
            //    },
                //isLowercase: true,        
                //isUppercase: true,
            }
        },
        passwordHash: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                len: [3, 50],
                notEmpty: true,
                //allowNull: false,
                isEmail: true,
                
            }
        },
        phonenumber: {
            type: DataTypes.INTEGER,
            unique: true,
            allowNull: false,
            validate: {
                //len: 10,
                notEmpty: true,
                //allowNull: false,
            }
        },
        auth_token: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                //len: 50,
                notEmpty: true,
                //allowNull: false,
            }
        },
        
    }, {
        sequelize,
        modelName: 'Users'
    });

    
    Users.associate = (models) => {
        // associations can be defined here
        models.Users.belongsToMany(models.Items, {through: 'Users_Items'});
        models.Users.belongsToMany(models.DietaryRestricts, {through: 'Users_DietaryRestricts'});

    };

    Users.beforeSave((user, options) => {
        if(user.password) {
          user.passwordHash = bcrypt.hashSync(user.password, 10);
        }
      });
    
    

    return Users;
    
};