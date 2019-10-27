// 'use strict';
// const { Model } = require('sequelize');


// module.exports = (sequelize, DataTypes) => {
//     class Media extends Model {}
//     Media.init({
//         name: {
//             type: DataTypes.STRING,
//             validate: {
//                 notEmpty: true
//             }
//         },
//         description: {
//             type: DataTypes.STRING,
//             validate: {
//                 len: [3, 500],
//                 notEmpty: true,
//             }
//         },
//         coverPhoto: {
//             type: DataTypes.STRING, //What data type to carry images?
//             validate: {
//                 len: [3, 10],
//                 notEmpty: true,
//                 isEmail: true,
//             }
//         }, 
//         bio: {
//             type: DataTypes.TEXT
//         },
//     }, {
//         sequelize,
//         modelName: 'Media'
//     });

//      Media.associate = (models) => {
//         models.Media.belongsTo(models.Trip);\

        
//         // associations can be defined here
//         // This will add MediaId as a column to the Media table
         
//      };

//     return Media;
// };
