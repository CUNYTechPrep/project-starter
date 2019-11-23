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

                // Ideally would have a 1 special character requirement but reg-ex's wilin
                is: {
                    args: "(?=.*[a-z])",
                    msg: "One lowercase character please."
                },
                is: {
                    args: "(?=.*[A-Z])",
                    msg: "One Uppercase character please."
                },
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
            }
        },
        auth_token: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: { 
                notEmpty: true,
            }
        },
        
    }, {
        sequelize,
        modelName: 'users',
        timestamps: false,
    });

    
    Users.associate = (models) => {
        // associations can be defined here
        models.Users.belongsToMany(models.Items, {through: 'users_items'});
        models.Users.belongsToMany(models.Dietaryrestricts, {through: 'users_dietaryrestricts'});

    };

    Users.beforeSave((user, options) => {
        if(user.password) {
          user.passwordHash = bcrypt.hashSync(user.password, 10);
        }
    });
    
    

    return Users;
    
};
