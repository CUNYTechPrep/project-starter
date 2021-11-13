'use strict';
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('events', {
      event_id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      event_title:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      event_desc:{
        type: DataTypes.STRING,
        allowNull: false
      },
      online_event:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      // events can also be virtual, therefore allowNull is true
      capacity:{
        type: DataTypes.INTEGER,
      },
      taken:{
        type: DataTypes.INTEGER,
      },
      hit_limit:{
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      event_address:{
        type: DataTypes.STRING,
      },
      event_city:{
        type: DataTypes.STRING,
      },
      event_state:{
        type: DataTypes.STRING,
      },
      event_country:{
        type: DataTypes.STRING,
      },
      event_zip:{
        type: DataTypes.STRING,
      },
      event_long:{
        type: DataTypes.DECIMAL
      },
      event_lat:{
        type: DataTypes.DECIMAL
      },
      event_start:{
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          isDate: true,
          isAfter: DataTypes.NOW
        },
      },
      event_end:{
        type: DataTypes.DATE,
        allowNull: false
      },
      event_image:{
        type: DataTypes.STRING,
        defaultValue: 'https://lahousing.lacity.org/AAHR/Images/No_Image_Available.jpg',
      },
      event_past:{
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false
      },
      require_vac:{
        type: DataTypes.BOOLEAN
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
    await queryInterface.dropTable('events');
  }
};