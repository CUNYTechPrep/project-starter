"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
	class UserInfo extends Model {}

	UserInfo.init(
		{
            user_id : {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
              },            
            name: {
				type: DataTypes.STRING,
				validate: {
                    isNull: true,
					notEmpty: true,
				},
			},
			email: {
				type: DataTypes.STRING,
				validate: {
                    isNull: false,
					notEmpty: true,
                    unique: true,
				},
			},			
            password: {
				type: DataTypes.STRING,
				validate: {
					isNull: false,
                    notEmpty: true,
                    isEmail: true
				},
			},
		},
		{
			sequelize,
			modelName: "UserInfo",
		}
	);

	UserInfo.associate = (models) => {
		UserInfo.hasMany(models.House, {
            // foreignKey: 'user_id',
            // as: 'OwnerID',
            // allowNull: false
        })
	};

	return UserInfo;
};
