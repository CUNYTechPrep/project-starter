const db = require('./models');
//const { Genre, Movie, Actor } = db;
const { Profile, Thread, Matched_Buddies, Swipe } = db;

const PROFILE = [
//   {id: 1, name: 'Action'},
//   {id: 2, name: 'Comedy'},
//   {id: 3, name: 'Drama'},
];

const THREAD = [
//   {id: 1, title: 'Independence Day', year: 1996, genreId: 1},
//   {id: 2, title: 'Men in Black II', year: 2002, genreId: 2},
//   {id: 3, title: 'Seven Pounds', year: 2008, genreId: 3},
//   {id: 4, title: 'Eagle Eye', year: 2008, genreId: 1},
//   {id: 5, title: 'Tropic Thunder', year: 2008, genreId: 2},
];

const SWIPE = [

];

const MATCHED_BUDDIES = [
//   {movieId: 1, actorId: 1},
//   {movieId: 2, actorId: 1},
//   {movieId: 2, actorId: 2},
//   {movieId: 3, actorId: 1},
//   {movieId: 3, actorId: 2},
];

const seed = () => {
//   return db.sequelize.sync({force: true})
//     .then(() => {
//       // Create all the entries
//       let genrePromises = GENRES.map(g => Genre.create(g));
//       let moviePromises = MOVIES.map(m => Movie.create(m));
//       let actorPromises = ACTORS.map(a => Actor.create(a));
//       return Promise.all([...genrePromises, ...moviePromises, ...actorPromises]);
//     })
//     .then(() => {
//       // Create the associations
//       let associationPromises = MOVIES_ACTORS.map(ma => {
//         let moviePromise = Movie.findByPk(ma.movieId);
//         let actorPromise = Actor.findByPk(ma.actorId);
//         return Promise.all([moviePromise, actorPromise])
//           .then(([movie, actor]) => {
//             return movie.addActor(actor);
//           })
//       });
//       return Promise.all(associationPromises);
//     });
}

module.exports = seed;