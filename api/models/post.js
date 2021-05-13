'use strict';
const { Model } = require('sequelize');

// classes created in Javscript
// they map one to one to database tables from the backend!
// kinda like assessing what datatypes each attributes are for each table
// each attribute is represented by table columns
// models only work in the backend, they connect to the database, and writes SQL for you
// we prefer a library like sequelize that generates that SQL for us
// models speak to the database
// this is an abstraction really
// these classes help to save records of the same shape of the class

//React is on the front end, which handles the user interface, and the user can never be trusted!
//  So we never give the front end application or user the access to the database
//     the controllers and routes and express define what interacts the front end has to communicate with the backend
// User types something, React takes data and fetch calls to express api, and the api speaks to the controller and then
//     the controller then speaks to the model which speaks to the database.

module.exports = (sequelize, DataTypes) => {
  class Post extends Model {}
  Post.init(
    {
      content: {
        type: DataTypes.STRING,
        validate: {
          len: [3, 250],
          notEmpty: true,
        },
      },
    },
    {
      sequelize,
      modelName: 'post',
    }
  );

  Post.associate = (models) => {
    // associations can be defined here
  };

  return Post;
};
