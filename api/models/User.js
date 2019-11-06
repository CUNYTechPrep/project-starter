const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class User extends Model {}

    User.init(
        {
            firstName: {
                type: DataTypes.STRING,
                allowNull: false
            },
            lastName: {
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
            modelName: "user"
        }
    );

    User.associate = models => {
        // associations can be defined here
        User.hasOne(models.Userprofile, {
            foreignKey: "userId"
        });

        User.hasMany(models.Education);
        User.hasMany(models.Experience);

        User.belongsToMany(models.Job, {
            through: "Jobs_Applicants",
            as: "Jobs_Applied",
            foreignKey: "jobId"
        });
    };

    return User;
};
