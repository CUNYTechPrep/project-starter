'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Vote extends Model {}

    Vote.init({
        gId: {
            type: DataTypes.STRING,
            validate: {
                notEmpty: true,
            }
        },
        pId: {
            type: DataTypes.STRING,
            validate: {
                notEmpty:true,
            }
        }, 
        vCount: {
            type: DataTypes.STRING,
            defaultValue: "0",
        }
    }, {
        sequelize,
        modelName: "vote"
    });

    Vote.associate = (models) => {
                // associations can be defined here
    };

    return Vote;
}