const express = require("express");
const router = express.Router();
const db = require("../models");
const passport = require('../middlewares/authentication')
const { User,Media,Commment,Rating } = db; 

const fetch = require('node-fetch');

// const {media}= db;  calculate the avg here
// one controller for  all the tables 

// This is a simple example for providing basic CRUD routes for
// a resource/model. It provides the following:
//    GET    /api/micro_posts
//    POST   /api/micro_posts
//    GET    /api/micro_posts/:id
//    PUT    /api/micro_posts/:id
//    DELETE /api/micro_posts/:id
//
// The full URL's for these routes are composed by combining the
// prefixes used to load the controller files.
//    /api comes from the file ../app.js
//    /micro_posts comes from the file ./microPosts.js

///tester, ignore this 
// router.get("/shows/:title",(req, res) => {  // fetching 
//   //   User.findAll({}).then((allUsers) => res.json(allUsers));

//   const { title } = req.params;
//   // console.log('title is', title)

//   fetch("https://api.tvmaze.com/singlesearch/shows?q="+title)
//   .then(response => response.json())
//   // .then(shows => shows.filter(show => show.name.startsWith(title)))
//   .then((show)=> {  
//  res.json({show})})
//       // console.log("num")
//   });
/////////////////////////////////////////////////////////////////////////////////////////
router.post("/shows/:title", passport.isAuthenticated(), async (req, res) => { // create a new Media  /// this should be in rating post
  const { title } = req.params;   // 
  try {
    let response = await fetch("https://api.tvmaze.com/singlesearch/shows?q=" + title)

    let show = await response.json()   // try and catch 

    const numberImdb = show.externals.imdb
    await Media.create({ MediaID: numberImdb, AvgRating: 0 })
  }
  catch (e) {
    res.status(400).json(e);//error
  }

})




router.post("/mediaId/ratings", passport.isAuthenticated(), async (req, res) => { // create rating and update avg
  const { userId, mediaId, ratingValue } = req.body;
  const rating = await Rating.create({
    RatingValue: ratingValue, MediaID: mediaId, UserId: userId
  }) // consider MediumMediaID if doesnt work

  const media = await Media.findByPk(mediaId);
  if (!media) {
    return res.sendStatus(404);
  }

  const { count, ratings } = await Rating.findAndCountAll({
    // use await here too
    where: { MediaID: mediaId },
  });

  let total = 0;
  let avg = 0;
  ratings.foreach((nums) => {
    total += nums;
  });
  avg = total / count;

  await Media.update({ AvgRating: avg })

  return res.status(201).json(rating); // success
}
)

router.get('/ratings/avarage', async (req, res) => { // show avarge fo given media

  const mediaId = req.query.mediaId; // mediaId is passed from frontend as query param
  const media = await Media.findByPk(mediaId);

  if (!media) {
    return res.sendStatus(404);
  }
  return res.status(200).json({ avgRating: media.AvgRating });

});
router.post("/comments", async (req, res) => {  //  create new comment 

  const { userId, mediaId, comment } = req.body;
  const comments = await Commment.create({
    UserId: userId, MediaID: mediaId, Comments: comment
  })

  return res.status(201).json(comments); // success                                

})
router.get("/mediaId/comments", async (req,res)=>{
  const mediaId = req.query.mediaId; // mediaId is passed from frontend as query param
  const media = await Media.findByPk(mediaId);
  if (!media) {
    return res.sendStatus(404);
  }
  return res.status(200).json({ comments: Commment.Comments });
  
})




module.exports = router;
