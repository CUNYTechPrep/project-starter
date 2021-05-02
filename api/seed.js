const db = require("./models");
const { User, Group, Place } = db;
const PLACES = require("./controllers/places.json");
const { sequelize } = require("sequelize");

const USERS = [
  {
    firstName: "Jephter",
    lastName: "Maurice",
    email: "jephter.maurice@gmail.com",
    password: "password1",
    profilePicture:
      "https://ca.slack-edge.com/T016TJTJSFN-U017NUDE52T-8bcd8e65fd7f-192",
  },
  {
    firstName: "Shanice",
    lastName: "Smith",
    email: "shanice.smith@gmail.com",
    password: "password2",
    profilePicture:
      "https://ca.slack-edge.com/T016TJTJSFN-U017PF4CZ55-aeabddd07268-512",
  },
  {
    firstName: "Anthony",
    lastName: "Boris",
    email: "boris.anthony@gmail.com",
    password: "password3",
    profilePicture:
      "https://ca.slack-edge.com/T016TJTJSFN-U017WULGLRL-g1c406dafade-512",
  },
  {
    firstName: "user4_firstName",
    lastName: "user4_lastName",
    email: "user4@gmail.com",
    password: "password4",
    profilePicture:
      "https://ca.slack-edge.com/T016TJTJSFN-U017WULGLRL-g1c406dafade-512",
  },
  {
    firstName: "user5_firstName",
    lastName: "user5_lastName",
    email: "user5@gmail.com",
    password: "password5",
    profilePicture:
      "https://ca.slack-edge.com/T016TJTJSFN-U017WULGLRL-g1c406dafade-512",
  },
];

const GROUPS = [
  {
    groupId: "1111111111",
    groupName: "StrikeOut",
    members: [
      "jephter.maurice@gmail.com",
      "boris.anthony@gmail.com",
      "user3@gmail.com",
    ],
    places: [
      "ChIJob8BhadewokROi32ccC9Bzg",
      "ChIJs8E2cSFcwokRwt6W_ly2b7E",
      "ChIJh00YQZpewokRFYJK8QJ9ric",
    ],
  },
  {
    groupId: "2222222222",
    groupName: "EndOfTheTunnel",
    members: [
      "jephter.maurice@gmail.com",
      "shanice.smith@gmail.com",
      "user5@gmail.com",
    ],
    places: [
      "ChIJdeS2mydcwokRRhTrtCgbGYs",
      "ChIJdcj03CdcwokRbKx-Q1ldpNE",
      "ChIJPWW-myNcwokRKZpmbfqCeZY",
    ],
  },
  {
    groupId: "3333333333",
    members: ["user4@gmail.com", "user5@gmail.com"],
    places: [
      "ChIJkbeKH_lYwokRI-A2Yuf_XSg",
      "ChIJr9cp0ldYwokRxolUb1zQPzE",
      "ChIJ2_sBETNiwokRMiIz3QweJcY",
    ],
  },
];

// const Groups_USERS = [
//   { groupId: "1111111111", email: "user1.gmail.com" },
//   { groupId: "1111111111", email: "user2.gmail.com" },
//   { groupId: "1111111111", email: "user3.gmail.com" },
//   { groupId: "2222222222", email: "user4.gmail.com" },
//   { groupId: "2222222222", email: "user5.gmail.com" },
// ];

const seed = () => {
  return db.sequelize
    .sync({ force: true })
    .then(() => {
      // create all the entries
      let userPromises = USERS.map((user) => User.create(user));
      let groupPromises = GROUPS.map((group) => Group.create(group));
      let placespromises = PLACES.map((place) =>
        Place.create({
          place_id: place.place_id,
          name: place.name,
          types: place.types,
          address: place.vicinity,
        })
      );

      return Promise.all([
        ...userPromises,
        ...groupPromises,
        ...placespromises,
      ]);
    })
    .then(() => {
      // create the associations
      let associationPromises = Groups_USERS.map((gu) => {
        let groupPromise = Group.findOne({ where: { groupId: gu.groupId } });
        let userPromise = User.findOne({ where: { email: gu.email } });
        return Promise.all([groupPromise, userPromise]).then(
          ([group, user]) => {
            return group.addUser(user);
          }
        );
      });
      return Promise.all(associationPromises);
    });
};

module.exports = seed;
