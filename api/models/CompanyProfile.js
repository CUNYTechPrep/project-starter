const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class CompanyProfile extends Model {}

    CompanyProfile.init(
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

    CompanyProfile.associate = models => {
        // associations can be defined here
        CompanyProfile.belongsTo(models.Company, {
            foreignKey: "companyId",
            onDelete: "CASCADE"
        });
    };

    return CompanyProfile;
};
