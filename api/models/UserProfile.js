const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Userprofile extends Model {}

    Userprofile.init(
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
            modelName: "userprofile"
        }
    );

    Userprofile.associate = models => {
        Userprofile.belongsTo(models.User, {
            foreignKey: "userId",
            onDelete: "CASCADE"
        });
    };

    return Userprofile;
};
