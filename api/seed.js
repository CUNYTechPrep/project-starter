const db = require('./models');
const { User } = db;

// const USER = [
//   {id: 1, name: 'Action'},
//   {id: 2, name: 'Comedy'},
//   {id: 3, name: 'Drama'},
// ];

const USER = [
  {id: 1, username: 'shahzoda', password: 'zzoda', email: 'shahzoda@gmail.com', bio: 'here are the things i want to include', photo:'../assets/images/sally.png'},
  {id: 2, username: 'noor', password: 'zzodaaaa', email: 'noor@gmail.com', bio: 'here are the things i want to include', photo:'../assets/images/sally.png'},
  {id: 3, username: 'narvisha', password: 'narnar', email: 'narvisha@gmail.com', bio: 'here are the things i want to include', photo:'../assets/images/sally.png'},
];

const seed = () => {
  return db.sequelize.sync({force: true})
    .then(() => {
      // Create all the entries
      let userPromises = USER.map(u => User.create(u));
      // console.log(USER)
      return userPromises;
    })
}

// const seed = async () => {
//   await db.sequelize.sync({ force: true });
//   let userPromises = USER.map(async (u) => await User.create(u));
//   return userPromises;
// }
module.exports = seed;