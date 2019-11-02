const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Company extends Model {}

    Company.init(
        {
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        {
            sequelize,
            modelName: "company"
        }
    );

    Company.associate = models => {
        // associations can be defined here
        Company.hasOne(models.CompanyProfile, { foreignKey: "companyId" });
        Company;
    };

    return Company;
};
