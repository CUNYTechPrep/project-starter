'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {}

  Profile.init({
    school: {
      type: DataTypes.STRING,
      validate: {
        len: [3, 250],
        notEmpty: true,
      }
    },
    
    graduatingYear: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [2, 3000],
        }
    },
    
    major: {
        type: DataTypes.STRING,
        validate: {
          len: [2, 250],
          notEmpty: true,
        }
    },
      
    classes: {
        type: DataTypes.STRING,
        validate: {
          len: [2, 250],
          notEmpty: true,
        }
    },
  },
  
  {
    sequelize,
    modelName: 'profile'
  });

//   Profile.associate = ({ user }) => {
//     Profile.belongsTo(user, {
//       foreignKey: 'id',
//       onDelete: 'CASCADE',
//       onUpdate: 'CASCADE',
//       as: 'profile',
//     });
//   };

  return Profile;
};





// var User = this.sequelize.define('user', {/* attributes */})
//   , Company  = this.sequelize.define('company', {/* attributes */});

// User.belongsTo(Company, {foreignKey: 'fk_company'});