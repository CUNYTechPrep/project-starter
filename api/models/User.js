'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class User extends Model {}

  User.init({ 
    fname: {
      type: DataTypes.STRING,
      validate: {
        len: [2, 256],
        notEmpty: true,
      },
    },

    lname: {
    type: DataTypes.STRING,
    validate: {
      len: [3, 256],
      notEmpty: true,
    },
  },

  email: {
    type: DataTypes.STRING,
    validate: {
      len: [3, 256],
      notEmpty: true,
    },
    unique: true, 
  },

  city: {
    type: DataTypes.STRING,
    validate: {
      len: [2, 10],
      notEmpty: true,
    },
  },

  zipcode: {
    type: DataTypes.STRING,
    validate: {
      len: [5],
      notEmpty: true, 
    },
  },

  state: {
    type: DataTypes.STRING,
    validate: {
      len: [2],
      notEmpty: true,
    },
  },

  resumeURL: {
    type: DataTypes.STRING,
    validate: {
      notEmpty: false,
    },
  },

  isBiz: {
    type: DataTypes.BOOLEAN,
    validate: {
      notEmpty: true,
    },
    unique: false, 
  },

  pass_hash: { type: DataTypes.STRING},
    password: {
      type: DataTypes.VIRTUAL,
      validate: {
      isLongEnough: (val) => {
        if(val.length < 7) {
          throw new Error("Please choose a longer password");
        }
      },
          notEmpty: true,
    },
    unique: true, 
  },
},
   {
    sequelize,
    modelName: 'user'
  });

  User.associate = (models) => {
    // associations can be defined here

    // This will add methods getMovies, setMovies, addMovie, and addMovies to Actor instances.
    models.User.belongsToMany(models.Skill, {through: 'UserSkills'});
    models.User.hasMany(models.Job);

  };

  return User;
};