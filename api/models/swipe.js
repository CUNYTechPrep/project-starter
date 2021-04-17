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
  class Swipe extends Model {}

  Swipe.init({
    status: {
      type: DataTypes.BOOLEAN,
      validate: {
        len: [3, 250],
        notEmpty: true,
      }
    },
  }, {
    sequelize,
    modelName: 'swipe'
  });

  Swipe.associate = (models) => {
    // associations can be defined here
    models.Swipe.hasOne(models.Profile, {as: 'swiper'});

    models.Swipe.hasOne(models.Profile, {as: 'swipee'});
    //our code has a relationship, AND a status [left or right]
    //SHOWN in line 24
  };

  return Swipe;
};

/*
 * We have the 
 * swiper id, -> user that did the swiping
 * swipee id -> the person that was rated or swiped by 
 * status -> boolean or enum or string - how you would do the yes or no [left or right]
 *      later you want to query this table, 
 * Get list of all the list you got a yes on and no on
 * 
 * In the future, we do not want the users to be able to see old users! 
 * If new users come, we want to add it to their list of unseen users. 
 */

//When Im swipee, I will see some people swiped me yes or no

// If I see who swiped yes on me, I look at where Im swipee, I look at status true
//          if status is false, don't show that profile ever again

//Any time a user does a swipe, you create a new log of ALL the actions
//              It will have all of those actions the user took













