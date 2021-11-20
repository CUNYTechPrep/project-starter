'use strict';
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('order', {
      order_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUID,
        primaryKey: true
      },
      product_id: {
        type: DataTypes.UUID,
        primaryKey: false,
        references: {
          model: 'product',
          key: 'product_id'
        },
      },
      user_id: {
        type: DataTypes.UUID,
        primaryKey: false,
        references: {
          model: 'user',
          key: 'user_id'
        },
      },
    });
  },
  down: async (queryInterface, DataTypes) => {
    await queryInterface.dropTable('order');
  }
};