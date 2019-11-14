'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Job extends Model {}

  Job.init({ 
    title: {
      type: DataTypes.STRING,
      validate: {
        len: [2, 256],
        notEmpty: true,
      },
    },

  company: {
    type: DataTypes.STRING,
    validate: {
      len: [3, 20],
      notEmpty: true,
    },
  },

  postingURL: {
    type: DataTypes.STRING,
    validate: {
      len: [3, 256],
      notEmpty: false,
    },
  },
},
   {
    sequelize,
    modelName: 'job'
  });

  Job.associate = (models) => {
    // associations can be defined here

    models.Job.belongsToMany(models.Skill, {through: 'JobSkills'});
    models.Job.belongsTo(models.User, {as: 'poster'})
  };

  return Job;
};