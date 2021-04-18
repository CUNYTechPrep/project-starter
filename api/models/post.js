'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Post extends Model {}

  Post.init({
    body: {
      type: DataTypes.TEXT,
      validate: {
        notEmpty: true,
      }
    },

    title: {
      type: DataTypes.STRING,
      validate: {

      }
    },

    likes: {
      type: DataTypes.INTEGER
    },

    dislikes: {
      type: DataTypes.INTEGER
    }


  }, {
    sequelize,
    modelName: 'post'
  });

  Post.associate = (models) => {
    // associations can be defined here

    //this will add postId to Media 
    //Instances of Post will get the accessors getMedia and setMedia.
    models.Post.hasMany(models.Media)
    
    //this will add fkUserName to Post 
    //Instances of Post will get the accessors getUser and setUser.
    models.Post.belongsTo(models.User , {foreignKey: 'fkUserName'})

    //this will add locationId to Post 
    //Instances of Post will get the accessors getLocation and setLocation.
    models.Post.belongsTo(models.Location)

    //this will add postId to Comment 
    //Instances of Post will get the accessors getComments and setComments.
    models.Post.hasMany(models.Comment)

    // This will create a Many-to-Many relationship
    // It creates a new table (PostCategory) to hold postId and categoryId
    // This will add methods getCategories, setCategories, addCategory, addCategories to Post instances.
    models.Post.belongsToMany(models.Category, {through: 'PostCategory'});
  };

  return Post;
};