const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Job extends Model {}

    Job.init(
        {
            title: {
                type: DataTypes.STRING,
                allowNull: false
            },
            description: {
                type: DataTypes.STRING,
                allowNull: false
            },
            typeofposition: {
                //internship, full time, contractor
                type: DataTypes.STRING,
                allowNull: false
            },
            primaryrole: {
                //Software developer, technology analyst, etc
                type: DataTypes.STRING
            }
        },
        {
            sequelize,
            modelName: "job"
        }
    );

    Job.associate = models => {
        // associations can be defined here
        Job.belongsTo(models.Company, {
            foreignKey: "companyId",
            as: "jobPoster",
            onDelete: "CASCADE"
        });

        Job.belongsToMany(models.User, {
            through: "Jobs_Applicants",
            as: "Applicants",
            foreignKey: "userId"
        });
    };

    return Job;
};
