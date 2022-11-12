"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
	class House extends Model {}

	House.init(
		{
			address: {
				type: DataTypes.STRING,
				validate: {
					notEmpty: true,
				},
			},
			miscellaneous: {
				type: DataTypes.STRING,
				validate: {
					notEmpty: true,
				},
			},
		},
		{
			sequelize,
			modelName: "House",
		}
	);

	House.associate = (models) => {
		House.belongsTo(models.UserInfo, {
            foreignKey: 'ownerID',
            as: 'owner',
            allowNull: false,
        })
	};

	return House;
};
