// *


// DISREGARD THIS FOR NOW!!!


// *//





// const db = require("./models");
// const { User, Rating, Media, Comment } = db;


// const USER = [
//     {id: 1, name:"blabla", email:"email"},
//     {id: 1, name:"bleble", email:"email1"},
//     {id: 1, name:"blibli", email:"email2"}
// ]

// const RATING =[
//      {id:1, mediaId:21, userId:1,rateValue:1 },//ratingid = "userId" + "timestamps in seconds"
//      {id:2, mediaId:65, userId:31,rateValue:4 },
//      {id:3, mediaId:54, userId:41,rateValue:3 },
// ]

// const MEDIA = [
//       {id:1, avg_rating:4.5},
//       {id:1, avg_rating:4.5},
//       {id:1, avg_rating:4.5}

// ]
// const COMMENT =  [

//     {id:2, mediaId:4, userId:34, comment:"gfgfgf"},
//     {id:2, mediaId:4, userId:34, comment:"gfgfgf"},
//     {id:2, mediaId:4, userId:34, comment:"gfgfgf"}
// ]
// const seed = async () => {
//     await db.sequelize.sync({ force: true });
  
//     // create all entries (genres must be done first)
//     await Promise.all(USER.map((g) => User.create(u)));
//     await Promise.all(RATING.map((m) => Rating.create(r)));
//     await Promise.all(MEDIA.map((a) => Media.create(m)));
//     await Promise.all(COMMENT.map((a) => Comment.create(c)));
  
//     // Create the associations
//     let associationPromises = Rating_Media_User(async (urmc) => { //urmc = user rating media comment
//       let ratingPromise = Rating.findByPk(urmc.ratingId);
//       let mediaPromise =   Media.findByPk(urmc.mediaId);
//       const [movie, actor] = await Promise.all([moviePromise, actorPromise]);
//       return await movie.addActor(actor);
//     });
//     await Promise.all(associationPromises);
  
//     /*
//       Postgres only fix:
//         Since we provided fixed id's for our seed data,
//         we have to reset our id sequences in postgres.
//         (ONLY do this for Models with autoincrementing id's)
//     */
//     let genreReset = db.sequelize.query(
//       `select setval('"Genres_id_seq"', (select max(id) from "Genres"), true);`
//     );
//     let movieReset = db.sequelize.query(
//       `select setval('"Movies_id_seq"', (select max(id) from "Movies"), true);`
//     );
//     let actorReset = db.sequelize.query(
//       `select setval('"Actors_id_seq"', (select max(id) from "Actors"), true);`
//     );
  
//     return await Promise.all([genreReset, movieReset, actorReset]);
//   };
  
//   module.exports = seed;
  