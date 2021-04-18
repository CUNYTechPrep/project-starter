'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Category extends Model {}
  
    Category.init({

        name : {
            type : DataTypes.STRING
        },

        desc : {
            type : DataTypes.TEXT
        }
  
    }, {
      sequelize,
      modelName: 'category'
    });
  
    Category.associate = (models) => {
        // This will create a Many-to-Many relationship
        // It creates a new table (PostCategory) to hold postId and categoryId
        // This will add methods getPosts, setPosts, addPost, addPosts to Category instances.
        models.Category.belongsToMany(models.Post, {through: 'PostCategory'});
    };
  
    return Category;
  };