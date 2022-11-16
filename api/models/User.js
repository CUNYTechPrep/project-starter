"use strict";
const { Model } = require("sequelize");
const {bcrypt} = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
	class User extends Model {}

	User.init(
		{
			user_id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},
			name: {
				type: DataTypes.STRING,
				isNull: true,
				notEmpty: true,
				validate: {},
			},
			email: {
				type: DataTypes.STRING,
				unique: true,
				isNull: false,
				validate: {
					notEmpty: true,
					isEmail: true,
				},
			},
			passwordHash: {
				type: DataTypes.STRING,
			},
			password: {
				type: DataTypes.VIRTUAL,
				validate: {},
			},
		},
		{
			sequelize,
			modelName: "User",
		}
	);

	User.associate = (models) => {
		User.hasMany(models.House, {
			// foreignKey: 'user_id',
			// as: 'OwnerID',
			// allowNull: false
		});
	};

	User.beforeSave((user, options) =>{
		if(User.password){
			user.passwordHash = bcrypt.hashSync(user.password,10);
		}
	});

	return User;
};
