'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User, Participant}) {
      // define association here
      this.belongsTo(User,{foreignKey: 'user_id', allowNull: false});
      this.hasMany(Participant, {foreignKey: 'event_id'})
    }
    toJson(){
      return {...this.get(), id:undefined}
    }
  };
  Event.init({
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
    }
  }, {
    sequelize,
    tableName: 'events',
    modelName: 'Event',
  });
  return Event;
};
/*
{
    "user_id": "3d78e3d6-19b3-4605-a9a6-e9515df858ad",//grab it
    "event_title": "Testing event",
    "event_desc": "Testing, testing, testing 1 2 3",
    "online_event": false,
// The address and capacity section is opition, if the event is hosted online, there is no address and capacity could be unlimited
    "capacity": 50,
    "remaining": 45,
    // "hit_limit": Calculated by the backend code [BOOLEAN]
    "event_address": "65-30 Kissena Blvd",
    "event_city": "Queens",
    "event_state": "NY",
    "event_zip": "11367",
    // "event_long": Calculated by Backend Code [DECIMAL]
    // "event_lat": Calculated by Backend Code [DECIMAL]
    // "event_image":, Opitional [URL]
    "event_start": "2021-11-11 13:30",
    "event_end": "2021-11-11 15:30",
    // "event_past": Calculated by backend code [BOOLEAN]
    "require_vac": true
}
*/