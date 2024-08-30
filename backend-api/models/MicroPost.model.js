import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
  class MicroPost extends Model {}

  MicroPost.init(
    {
      content: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [3, 250],
          notEmpty: true,
        },
      },
    },
    {
      sequelize,
      modelName: "MicroPost",
    }
  );

  MicroPost.associate = (/* models */) => {
    // associations can be defined here
  };

  return MicroPost;
};
