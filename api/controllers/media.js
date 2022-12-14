const express = require("express");
const router = express.Router();

const db = require("../models");
const passport = require('../middlewares/authentication')
const { Media,Comment,Rating } = db; 

const fetch = require('node-fetch');
const { where } = require("sequelize");

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


router.get("/comment/:imdb", async (req, res) => {
  const {imdb} = req.params 
   const commentsMedia =  await Comment.findAll({
    where: { MediumMediaID: imdb}
   });
  
  return res.status(201).json(commentsMedia); // without curly brac returns an array
})

router.post("/:imdb", (req, res) => { // create a new Media  /// this should be in rating post
  const { imdb } = req.params;   // 
  
  Media.create({ MediaID:imdb, AvgRating: 0 })
  .then((newMedia) => {
    res.status(201).json(newMedia);
  })
  .catch((err) => {
    res.status(400).json(err); 
  });

})



router.post("/:imdb/:ratingValue", async (req, res) => { // create rating and update avg

  const { imdb, ratingValue } = req.params;

  await Rating.create({
    RatingValue: ratingValue, MediumMediaID: imdb
  }) 

  const media = await Media.findByPk(imdb);
  if (!media) {
    return res.sendStatus(404);
  }
  const { count, rows } = await Rating.findAndCountAll({
    // use await here too
    where: { MediumMediaID: imdb },
  });
   
  let total = 0;
  let avg = 0;

  rows.forEach((nums) => {
    if(nums.RatingValue===0) //if not rated not counted
    {
      count--;
    }
    total += nums.RatingValue;
  });
  avg = total / count;
    
  await Media.update({ AvgRating: avg },
   { where: { MediaID: imdb }}
  );

  return res.status(201).json(ratingValue); // success
}
)

router.get("/ratings/avarage/:imdb", async (req, res) => { // show avarge fo given media

  const { imdb } = req.params; 
  const media = await Media.findByPk(imdb);

  if (!media) {
    return res.sendStatus(404);
  }
  return res.status(200).json({ avgRating: media.AvgRating });
});

router.post("/comments/for/:imdb/:text",   async (req, res) => {  //  create new comment 

  const { imdb,text } = req.params;

      await Comment.create({
      MediumMediaID: imdb, Content:text
  })

  return res.status(201).json(text); // success                                

})

module.exports = router;
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
// router.post("/shows/:title", passport.isAuthenticated(), async (req, res) => { // create a new Media  /// this should be in rating post
//   const { title } = req.params;   // 
//   try {
//     let response = await fetch("https://api.tvmaze.com/singlesearch/shows?q=" + title)

//     let show = await response.json()   // try and catch 

//     const numberImdb = show.externals.imdb
//     await Media.create({ MediaID: numberImdb, AvgRating: 0 })
//   }
//   catch (e) {
//     res.status(400).json(e);//error
//   }

// })