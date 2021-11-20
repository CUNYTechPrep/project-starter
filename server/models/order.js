'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Order.belongsTo(models.User, {foreignKey: "user_id",  as: "User"});
      // Order.belongsTo(models.Product, {foreignKey: "product_id",  as: "Product"})
    }
  };
  Order.init({
    order_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUID,
      primaryKey: true
    },
    product_id: {
      type: DataTypes.UUID,
      primaryKey: false,
      references: {
        model: 'products',
        key: 'product_id'
      },
    },
    user_id: {
      type: DataTypes.UUID,
      primaryKey: false,
      references: {
        model: 'users',
        key: 'user_id'
      },
    }
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};