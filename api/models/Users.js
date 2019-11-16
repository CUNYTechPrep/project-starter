'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
    class Users extends Model { }

    Users.init({
        //timestamps: false,
        username: {
            type: DataTypes.STRING,
            unique: true,
            validate: {
                len: [3, 50],
                notEmpty: true,
                allowNull: false,
            }
        },
        password: {
            type: DataTypes.STRING,
            validate: {
                len: [8, 50],
                notEmpty: true,
                allowNull: false,
                //isIn: [['@', '!','#','$','%','&','^','<','>','/','?','+']],
                //isLowercase: true,        
                //isUppercase: true,
            }
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            validate: {
                //len: [3, 50],
                notEmpty: true,
                allowNull: false,
                isEmail: true,
                
            }
        },
        phonenumber: {
            type: DataTypes.BIGINT,
            unique: true,
            validate: {
                //len: 10,
                notEmpty: true,
                allowNull: false,
            }
        },
        authtoken: {
            type: DataTypes.STRING,
            unique: true,
            validate: {
                
                notEmpty: true,
                allowNull: false,
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