const db = require('./models');
const { User } = db;

const USER = [
  {id: 1, name: 'Action'},
  {id: 2, name: 'Comedy'},
  {id: 3, name: 'Drama'},
];

const seed = () => {
  return db.sequelize.sync({force: true})
    .then(() => {
      // Create all the entries
      let userPromises = USER.map(u => User.create(u));
      return userPromises;
    })
}

module.exports = seed;