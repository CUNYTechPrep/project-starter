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
  class User extends Model {
    getFullname() {
      return [this.firstName, this.lastName].join(' ');
    }
  }

  User.init({
    firstName: { type: DataTypes.STRING },
    lastName: { type: DataTypes.STRING },
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    passwordHash: { type: DataTypes.STRING },
    password: { 
      type: DataTypes.VIRTUAL,
      validate: {
        isLongEnough: (val) => {
          if (val.length < 7) {
            throw new Error("Please choose a longer password"); //we can decide any other restrictions
          }
        },
      },
    },
  }, {
    sequelize,
    modelName: 'user'
  });

  User.associate = (models) => {
    // associations can be defined here

    models.User.hasMany(models.Swipe, {as: "swiper"});
    models.User.hasMany(models.Swipe, {as: 'swipee'});
  };

  User.beforeSave((user, options) => {
    if(user.password) {
      user.passwordHash = bcrypt.hashSync(user.password, 10);
    }
  });

  return User;
};

//my profile is id#1, and there are 5 potential buddies
// when I log in, it will show everyone in my database,  //for DEMO purposes

// there is this list of all other profiles in the db, when Im new to app, 
// I havent swiped no yet.
// I have to swipe on someone, and ....
// When I swipe yes on them, its like yes
// we need to do TWO associations for one as the swiper id, and swipeee id.
// 

//We have a many to many associations.
// many to many table has two user ids
// Our project is relational. The direction matters in our code

 
//Profile has many 
//// Swipe -> as Swiper and as -> Swipee



















