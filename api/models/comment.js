const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Comment extends Model {}

    Comment.init(
        {
            comment: {
                type: DataTypes.STRING
            }
        },
        {
            sequelize,
            modelName: "comment"
        }
    );
    Comment.associations = models => {
        Comment.belongsTo(models.Post, {
            foreignKey: "postId",
            onDelete: "CASCADE"
        });

        // Comment.hasOne(models.Post, {
        //     foreignKey: "postId",
        //     onDelete: "CASCADE"
        // });
    };
    return Comment;
};
