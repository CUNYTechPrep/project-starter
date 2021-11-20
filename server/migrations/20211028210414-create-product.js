'use strict';
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('product', {
      product_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      imageLink: {
        type: DataTypes.STRING,
        allowNull: true
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      color: {
        type: DataTypes.STRING,
        allowNull: true
      },
      shelf: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.ARRAY(DataTypes.TEXT),
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
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  down: async (queryInterface, DataTypes) => {
    await queryInterface.dropTable('product');
  }
};