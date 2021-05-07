const express = require('express');
const router = express.Router();
const db = require('../models');
const { Post, Location, Media, User } = db;

// This is a simple example for providing basic CRUD routes for
// a resource/model. It provides the following:
//    GET    /posts
//    POST   /posts
//    GET    /posts/:id
//    PUT    /posts/:id
//    DELETE /posts/:id 

// There are other styles for creating these route handlers, we typically
// explore other patterns to reduce code duplication.
// TODO: Can you spot where we have some duplication below?


// ./api/posts (get)
//finds all posts in the database 
//for each post find the associated media and location instance
//returns an array of json objects of the format {"post": {post data}, "media": [{media data}], "location": {location data}}
router.get('/', async (req,res) => {

  const posts = await Post.findAll();

  let postMedLocArr =[]
  for(let i=0; i<posts.length; i++){
    const post = posts[i]
    let media = await post.getMedia()
    let location = await post.getLocation()
    let postMedLocObj= {}
    
    postMedLocObj.post =  post 
    postMedLocObj.media = media
    postMedLocObj.location = location
    postMedLocArr.push(postMedLocObj)
  

    if(i === posts.length-1){
      res.json(postMedLocArr)
    }
  }
});

// ./api/posts (post)
//takes in form data from CreatePost Page, and creates the tables in the backend.
//first it tries to find the location if exists otherwise creates new location instance. 
//then creates post instance and associates the location id to it.
//then the media instance is created for that post. 
//finally an array containing the location, post, and media json objects is returned. int the format [{location}, {post}, {media}]
router.post('/', (req, res) => {
  let content  = req.body;
  let resArr = []

  Location.findOrCreate({where: {lat: parseFloat(content.lat), lng: parseFloat(content.lng)}, defaults: {state: content.state, city: content.city, zipCode: content.zip, streetAddress: content.streetAddress}})
          .then(([location, created]) =>{
            resArr.push(location)
            return  Post.create({body: content.body, title: content.title, fkUserName: "okeson0", likes: 0, dislikes: 0, locationId: location.id})    
          })
          .then(post =>{
            resArr.push(post)
            return Media.create({link: content.link, postId: post.id})
          })
          .then(media =>{
            resArr.push(media)
            res.status(201).json(resArr);
          })
          .catch(err => {
            res.status(400).json(err);
          });
});


// ./api/posts/:id 
//this api endpoint would return an json object containing the post instance, media instance and location instance in the format
// {"post": {post obj stuff},
//  "media": {media obj stuff},
//  "location": {location obj stuff}  
//}
router.get('/:id', async (req, res) => {
  const {id}  = req.params;
  let post = await Post.findByPk(parseInt(id, 10))
    
  if(!post) {
    return res.sendStatus(404);
  }

  let postMedLocObj = {}
  let media = await post.getMedia();
  let location = await post.getLocation();
  postMedLocObj.post = post;
  postMedLocObj.media = media;
  postMedLocObj.location = location;
  res.json(postMedLocObj);
});



// ./api/posts/like/:id 
// pass the post id to increment the like in that post. 
router.put('/like/:id', (req, res) => {
  const { id } = req.params;
  Post.findByPk(parseInt(id, 10))
    .then(post => {
      if(!post) {
        return res.sendStatus(404);
      }

      post.likes = post.likes +1;
      post.save()
        .then(post => {
          res.status(200).json(post);
        })
        .catch(err => {
          res.status(400).json(err);
        });
    });
});

// ./api/posts/dislike/:id 
// use this endpoint and pass the post id to increment the dislike value by one. 
router.put('/dislike/:id', (req, res) => {
  const { id } = req.params;
  Post.findByPk(parseInt(id, 10))
    .then(post => {
      if(!post) {
        return res.sendStatus(404);
      }

      post.dislikes = post.dislikes +1;
      post.save()
        .then(post => {
          res.status(200).json(post);
        })
        .catch(err => {
          res.status(400).json(err);
        });
    });
});

// ./api/posts/getByUser/:userName
// call this endpoint with the userName and get an array of all posts made by that user. 
// the array holds objects that have the properties post, media and location. 
// in the following format [{"post": {post data}, "media": {media data}, "location": {location data}}]
router.get('/getByUser/:userName', async (req,res) => {
  const { userName } = req.params;
  const user = await User.findByPk(userName);
  const posts = await user.getPosts();

  let postMedLocArr =[]
  for(let i=0; i<posts.length; i++){
    const post = posts[i]
    let media = await post.getMedia()
    let location = await post.getLocation()
    let postMedLocObj= {}
    
    postMedLocObj.post =  post 
    postMedLocObj.media = media
    postMedLocObj.location = location
    postMedLocArr.push(postMedLocObj)
  

    if(i === posts.length-1){
      res.json(postMedLocArr)
    }
  }
});


router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  let post = await Post.findByPk(parseInt(id, 10))
    
  if(!post) {
    return res.sendStatus(404);
  }

  let mediaInst = await Media.findOne( {where : {postId: post.id}});
  mediaInst.destroy();
  post.destroy();
  res.sendStatus(204);
});


module.exports = router;