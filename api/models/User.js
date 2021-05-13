'use strict';
const { Model } = require('sequelize');
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
    class User extends Model {}
  
    User.init({
        userName: {
            type : DataTypes.STRING,
            primaryKey: true
        },

        passwordHash: { type: DataTypes.STRING },

        password: {
            type: DataTypes.VIRTUAL,
            validate: {
                isLongEnough:  (val) => {
                    if (val.length < 7) {
                        throw new Error("Please choose a longer password");
                    }
                },
            }
        },

        email: {
            type : DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                isEmail: true,
            }
        },

        fName: {
            type : DataTypes.STRING,
        },

        lName: {
            type : DataTypes.STRING,
        },

        birthDate: {
            type : DataTypes.DATEONLY,
        },

        profilePic: {
            type : DataTypes.TEXT,
        },

        status: {
            type : DataTypes.BOOLEAN,
        },

    }, {
      sequelize,
      modelName: 'user'
    });
  
    User.associate = (models) => {
      // associations can be defined here

      //this will add userName to Post 
      //Instances of User will get the accessors getPosts and setPosts.
      models.User.hasMany(models.Post , {foreignKey: 'fkUserName'})


      //this will add userName to Comment 
      //Instances of User will get the accessors getComments and setComments.
      models.User.hasMany(models.Comment , {foreignKey: 'fkUserName'})

    // This will create a Many-to-Many relationship
    // It creates a new table (PostLikes) to hold postId and userName
    // This will add methods getPosts, setPosts, addPost, addPosts to User instances.
      models.User.belongsToMany(models.Post, {through: models.PostLikes})

      models.User.belongsToMany(models.Post, {through: models.PostDislikes})
      
    };

    User.beforeSave((user, options) => {
        if(user.password) {
          user.passwordHash = bcrypt.hashSync(user.password, 5);
        }
    });
  
    return User;
  };