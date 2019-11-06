const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Companyprofile extends Model {}

    Companyprofile.init(
        {
            overview: {
                type: DataTypes.STRING
            },
            website: {
                type: DataTypes.STRING
            },
            industry: {
                type: DataTypes.STRING
            },
            headquaters: {
                type: DataTypes.STRING
            },
            type: {
                type: DataTypes.STRING
            },
            yearFounded: {
                type: DataTypes.DATE
            },
            companypicture: {
                type: DataTypes.STRING
            }
        },
        {
            sequelize,
            modelName: "companyprofile"
        }
    );

    Companyprofile.associate = models => {
        // associations can be defined here
        Companyprofile.belongsTo(models.Company, {
            foreignKey: "companyId",
            onDelete: "CASCADE"
        });
    };

    return Companyprofile;
};
