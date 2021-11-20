'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // User.belongsToMany(models.Product, { as: "ProductsInUsers", through: models.Order, foreignKey:"user_id"})
    }
    // toJSON(){
    //   return{...this.get(), id: undefined}
    // }
  };
  User.init({
    user_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "User must have a email."},
        notEmpty: { msg: "Email must not be empty."}
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "User must have a passsword."},
        notEmpty: { msg: "Password must not be empty."}
      }
    }
  }, {
    sequelize,
    tableName: "user",
    modelName: 'User',

  });
  return User;
};