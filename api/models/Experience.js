const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Experience extends Model {}

    Experience.init(
        {
            title: {
                type: DataTypes.STRING,
                allowNull: false
            },
            company: {
                type: DataTypes.STRING
            },
            location: {
                type: DataTypes.STRING
            },
            from: {
                type: DataTypes.DATE
            },
            to: {
                type: DataTypes.DATE
            },
            description: {
                type: DataTypes.DATE
            },
            current: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            }
        },
        {
            sequelize,
            modelName: "experience"
        }
    );

    Experience.associate = models => {
        // associations can be defined here
        Experience.belongsTo(models.User, {
            foreignKey: "userId",
            onDelete: "CASCADE"
        });
    };

    return Experience;
};
