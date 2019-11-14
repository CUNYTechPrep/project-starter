'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Skill extends Model {}

  Skill.init({ 
    name: {
      type: DataTypes.STRING,
      validate: {
        len: [2, 256],
        notEmpty: true,
      },
      unique: true,
    },
},
   {
    sequelize,
    modelName: 'skill'
  });

  Skill.associate = (models) => {
    // associations can be defined here

    // This will add methods getMovies, setMovies, addMovie, and addMovies to Actor instances.
    models.Skill.belongsToMany(models.Job, {through: 'JobSkills'});
    models.Skill.belongsToMany(models.User, {through: 'UserSkills'});
  };
  return Skill;
};