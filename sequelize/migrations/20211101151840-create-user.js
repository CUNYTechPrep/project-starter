'use strict';
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('users', {
      user_id:{
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      username:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      first_name:{
        type: DataTypes.STRING,
        allowNull: false
      },
      last_name:{
        type: DataTypes.STRING,
        allowNull: false
      },
      email:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: {'Email Address must be valid'}
        }
      },
      phone_number:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      birth_date:{
        type: DataTypes.DATE,
        allowNull: false,
      },
      address:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      city:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      state:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      country:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      zip:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      is_vaccinated:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      is_verifed:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      pfp:{
        type: DataTypes.STRING,
        defaultValue: 'https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=20&m=1223671392&s=612x612&w=0&h=lGpj2vWAI3WUT1JeJWm1PRoHT3V15_1pdcTn2szdwQ0='
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
    await queryInterface.dropTable('users');
  }
};