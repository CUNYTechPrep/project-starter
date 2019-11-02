const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class UserProfile extends Model {}

    UserProfile.init(
        {
            bio: {
                type: DataTypes.STRING
            },
            title: {
                type: DataTypes.STRING
            },
            linkedIn: {
                type: DataTypes.STRING
            },
            github: {
                type: DataTypes.STRING
            },
            website: {
                type: DataTypes.STRING
            },
            profilepicture: {
                type: DataTypes.STRING
            }
        },
        {
            sequelize,
            modelName: "userProfile"
        }
    );

    UserProfile.associate = models => {
        UserProfile.belongsTo(models.User, {
            foreignKey: "userId",
            onDelete: "CASCADE"
        });
    };

    return UserProfile;
};
