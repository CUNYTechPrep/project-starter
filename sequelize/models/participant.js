'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Participant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User, Event}) {
      // define association here
      
      this.belongsTo(User, {foreignKey: 'user_id'})
      this.belongsTo(Event,{foreignKey: 'event_id'})
    }
    toJson(){
      return {...this.get(), id:undefined}
    }
  };
  Participant.init({
    partipant_id:{
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    accommodations:{
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    tableName: 'partipants',
    modelName: 'Participant',
  });
  return Participant;
};
/*
{
    "event_id": "eb6f7005-6dd8-41b0-9efd-b0650b196886",//grab it
    "user_id": "3d78e3d6-19b3-4605-a9a6-e9515df858ad",//grab it
    "accommodations": "No Cheese" //opitional
}
*/