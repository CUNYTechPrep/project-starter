"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
	class Bill extends Model {}

	Bill.init(
		{
			billType: {
				type: DataTypes.STRING,
				validate: {
					notEmpty: true,
				},
			},
			amount: {
				type: DataTypes.INTEGER,
			},
			paidoff: {
				type: DataTypes.BOOLEAN,
			},
			dueDate: {
				type: DataTypes.DATE,
				validate: {},
			},
		},
		{
			sequelize,
			modelName: "Bill",
		}
	);

	Bill.associate = (models) => {
		Bill.belongsTo(models.House, {
			foreignKey: "houseId",
			as: "house",
			allowNull: false,
		});
	};

	return Bill;
};
