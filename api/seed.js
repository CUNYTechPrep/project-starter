const db = require("./models");
const { Post, Location, Media, Comment, User, Category } = db;

const Locations = [
  {
    state: "New York",
    city: "Brooklyn",
    zipCode: 11230,
    coord: { type: "Point", coordinates: [63.1257009, 14.5928298] },
  },
  {
    state: "New Jersey",
    city: "Jersey City",
    zipCode: 12321,
    coord: { type: "Point", coordinates: [39.3433574, 117.3616476] },
  },
  {
    state: "Washington",
    city: "Seattle",
    zipCode: 32011,
    coord: { type: "Point", coordinates: [31.491169, 120.31191] },
  },
  {
    state: "Virginia",
    city: "Washington DC",
    zipCode: 13002,
    coord: { type: "Point", coordinates: [31.5909061, 120.4927974] },
  },
  {
    state: "New York",
    city: "Brooklyn",
    zipCode: 40110,
    coord: { type: "Point", coordinates: [-8.7552, 120.7106] },
  },
];

const Posts = [
  {
    body:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    title: "Independence Day",
    likes: 1996,
    dislikes: 312,
    locationId: 1,
  },
  {
    body: "Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    title: "Men in Black II",
    likes: 2002,
    dislikes: 232,
    locationId: 3,
  },
  {
    body: "Integer aliquet, massa id lobortis convallis",
    title: "Seven Pounds",
    likes: 2008,
    dislikes: 301,
    locationId: 2,
  },
  {
    body: "Nullam sit amet turpis elementum ligula",
    title: "Eagle Eye",
    likes: 2008,
    dislikes: 198,
    locationId: 5,
  },
  {
    body: "Morbi ut odio. Cras mi pede, malesuada in",
    title: "Tropic Thunder",
    likes: 2008,
    dislikes: 1231,
    locationId: 4,
  },
];

const Medias = [
  { link: "sfhsjkfhasjkfsjkfh", postId: 1 },
  { link: "dafhdsjkfasfjhsafjks", postId: 3 },
  { link: "sdafhjdksafjskhfkja", postId: 5 },
];

const Users = [
  {
    userName: "okeson0",
    password: "UB1nRaJCvNNM",
    email: "okeson0@hexun.com",
    fName: "Otes",
    lName: "Keson",
    birthDate: "04/03/1995",
    profilePic: "http://dummyimage.com/173x100.png/5fa2dd/ffffff",
    status: true,
  },
  {
    userName: "hpendry1",
    password: "swQ6Zj1YA6",
    email: "hpendry1@google.es",
    fName: "Hannis",
    lName: "Pendry",
    birthDate: "07/29/2015",
    profilePic: "http://dummyimage.com/155x100.png/5fa2dd/ffffff",
    status: false,
  },
  {
    userName: "tlawtey2",
    password: "qf5iEOrDDdLV",
    email: "tlawtey2@oracle.com",
    fName: "Tresa",
    lName: "Lawtey",
    birthDate: "10/05/2000",
    profilePic: "http://dummyimage.com/184x100.png/ff4444/ffffff",
    status: true,
  },
  {
    userName: "vmeagh3",
    password: "ln3Hog2ku9Tr",
    email: "vmeagh3@ebay.co.uk",
    fName: "Vivianna",
    lName: "Meagh",
    birthDate: "11/01/2020",
    profilePic: "http://dummyimage.com/237x100.png/dddddd/000000",
    status: false,
  },
  {
    userName: "fsegebrecht4",
    password: "BH8cPvkYO6",
    email: "fsegebrecht4@macromedia.com",
    fName: "Florinda",
    lName: "Segebrecht",
    birthDate: "01/16/2019",
    profilePic: "http://dummyimage.com/116x100.png/5fa2dd/ffffff",
    status: true,
  },
];

const Comments = [
  {
    body: "Cloned directional ability",
  },
  {
    body: "Multi-channelled systemic portal",
  },
  {
    body: "Business-focused 3rd generation utilisation",
  },
  {
    body: "Right-sized foreground attitude",
  },
  {
    body: "Pre-emptive reciprocal solution",
  },
  {
    body: "User-centric homogeneous conglomeration",
  },
  {
    body: "Secured multimedia architecture",
  },
  {
    body: "Advanced directional info-mediaries",
  },
  {
    body: "Realigned responsive synergy",
  },
  {
    body: "Organized empowering superstructure",
  },
  {
    body: "Mandatory 4th generation core",
  },
  {
    body: "Versatile responsive algorithm",
  },
];

const Categories = [
  {
    name: "Beach",
    desc: "Maecenas rhoncus aliquam lacus.",
  },
  {
    name: "Park",
    desc:
      "In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem.",
  },
  {
    name: "Mall",
    desc:
      "Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.",
  },
  {
    name: "Parking Lot",
    desc:
      "Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy.",
  },
  {
    name: "Airfield",
    desc:
      "In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.",
  },
  {
    name: "Down Town",
    desc: "Proin risus.",
  },
];

//   const createPost = async () => {
//       const point = {type: 'Point', coordinates: [63.1257009, 14.5928298]}
//       let location = await Location.findOne({where: {coord: point}})

//       const post = await Post.create({body:'Cras mi pede, malesuada in', title: 'Thunder Buddies', likes: 2008, dislikes: 1231})

//       if(location){
//           location.setPost(post)
//       }else {
//           location = await Location.create({ state: 'New York', city: 'Brooklyn', zipCode: 11230, coord: {type: 'Point', coordinates: [63.1257009, 14.5928298]}})

//           location.setPost(post)
//       }

//   }

const seed = async () => {
  await db.sequelize.sync({ force: true });

  // Create all the entries
  await Locations.map((L) => Location.create(L));
  await Posts.map((P) => Post.create(P));
  await Medias.map((M) => Media.create(M));
  await Users.map((U) => User.create(U));
  await Comments.map((C) => Comment.create(C));
  await Categories.map(Cat=> Category.create(Cat)) 
// await createPost()
};

module.exports = seed;
