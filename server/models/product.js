'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Product.belongsToMany(models.User, {as: "UsersForProducts", through: models.Order, foreignKey: "product_id"})
    }
    // toJSON(){
    //   return {...this.get(), id: undefined}
    // }
  };
  Product.init({
    product_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    imageLink: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    color: {
      type: DataTypes.STRING,
      allowNull: false
    },
    shelf: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.ARRAY(DataTypes.TEXT),//array type?
      allowNull: true
    },
    sizeChart: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sizeAble: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }


  }, {
    sequelize,
    tableName: "product",
    modelName: 'Product',
  });
  return Product;
};