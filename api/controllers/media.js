const express = require("express");
const router = express.Router();
const db = require("../models");
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
router.get("/shows/:title",(req, res) => {  // fetching 
  //   User.findAll({}).then((allUsers) => res.json(allUsers));

  const { title } = req.params;
  // console.log('title is', title)

  fetch("https://api.tvmaze.com/singlesearch/shows?q="+title)
  .then(response => response.json())
  // .then(shows => shows.filter(show => show.name.startsWith(title)))
  .then((show)=> {  
 res.json({show})})
      // console.log("num")
  });
/////////////////////////////////////////////////////////////////////////////////////////
router.post("/shows/:title", async (req, res) => { // create a new Media
  const { title } = req.params;   // 
  try{
    let response = await fetch("https://api.tvmaze.com/singlesearch/shows?q=" + title)
    
      let show = await response.json()   // try and catch 
   
      const numberImdb = (show.externals.imdb)
    await Media.create({ MediaID: numberImdb, AvgRating:0})
  }
  catch(e){
    console.log(e.message)
  }
  
    })

   
    router.put("/:MediaID", async (req, res) => { // update a new Media
      const { MediaID } = req.params;   // 
       Media.findByPk(MediaID).then((media)=>{
        if (!media) {
          return res.sendStatus(404);
        }
        const {count, ratings} =  Rating.findAndCountAll({ // use await here too
            where:{MediaID: number}
          })
      
          let total = 0; 
          let avg = 0;
          ratings.map((nums)=>{
          total+=nums;
          })
          avg = total/count;
  
         Media.update({AvgRating:avg})
      })
      
        })


///////////////////////////////////////////////////////////////////////
router.post("/",(req,res) =>{         // ignore from here on 
 let { content } = req.body;   // 

User.create({ content })
  .then((newUser) => {
    res.status(201).json(newUser);
  })
  .catch((err) => {
    res.status(400).json(err);
  });

})
  
////////////////////////////////////////////////////////////////////
router.get("/:id", (req, res) => {
  const { id } = req.params;
  MicroPost.findByPk(id).then((mpost) => {  //pk - primary key
    if (!mpost) {
      return res.sendStatus(404);
    }

    res.json(mpost);
  });
});

router.put("/:id", (req, res) => {       // update item 
  const { id } = req.params;
  MicroPost.findByPk(id).then((mpost) => {
    if (!mpost) {
      return res.sendStatus(404);
    }

    mpost.content = req.body.content;
    mpost
      .save()
      .then((updatedPost) => {
        res.json(updatedPost);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  MicroPost.findByPk(id).then((mpost) => {
    if (!mpost) {
      return res.sendStatus(404);
    }

    mpost.destroy();
    res.sendStatus(204);
  });
});

module.exports = router;
