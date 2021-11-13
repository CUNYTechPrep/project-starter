// sequelize model:generate --name User --attributes username:string, first_name:string, last_name:string, email:string, phone_number:string, birth_date:date
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
    static associate({Event, Participant}) {
      // define association here
      this.hasMany(Participant, {foreignKey: 'user_id'})
      this.hasMany(Event, {foreignKey: 'user_id'})
    }
    // toJson(){
    //   return {...this.get(), id:undefined, user_id:undefined}
    //   // prevents users from seeing their id
    // }
  };
  User.init({
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
        isUrl: true
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
  }, {
    sequelize,
    tableName: 'users',
    modelName: 'User',
  });
  return User;
};
/* Template
{
    "username":"jeffreyg1",
    "first_name": "Jeffrey",
    "last_name": "Guan",
    "email": "jeffreyg@gmail.com",
    "phone_number": "347-111-1111",
    "birth_date": "03/03/2001",
    "address": "abc street",
    "city": "New York City",
    "state": "NY",
    "country": "United States",
    "zip": 10001,
    "is_vaccinated": true,
    "is_verifed": false
    // "image": opitional
}
*/