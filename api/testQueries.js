const db = require('./models');
const { Post, Location, Media, User, Comment, Category } = db;
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

/*
  currently, the Location table only has 5 entries:
  Add one more Location of your choice.
*/
function insertNewLocation() {
    return Location.create({state: 'Texas', city: 'Houston', zipCode: 32912, coord: {type: 'Point', coordinates: [-30.12, 150.76]}})
                .then(newLoc => {
                    console.log(newLoc.state + " " + newLoc.city)
                })
                .catch(err => {
                    console.log(err)
                })
}

/*
  currently, there are 5 Posts
  Add one more Post of your choice.
*/
function insertNewPost() {
    return Post.create({body:'lectus in quam fringilla rhoncus.', title: 'Awesome Title', likes: 200, dislikes: 32, locationId: 3})
               .then(newPost => {
                   console.log(newPost.title)
               })
               .catch(err => {
                   console.log(err)
               })
}

/*
  Return the state and city of the location with id=2 as an object containg state and city properties 

  objet to be returned 

  objExample = {
      state : "stateName",
      city : "cityName"
  }
*/
async function getLocationWithId2() {
    let cityStateObj = {}

    const loc = await Location.findByPk(2)
            
    cityStateObj.state = loc.state
    cityStateObj.city = loc.city

    return cityStateObj
}

/*
  Return an array of all the Post titles
*/
async function getAllPosts() {
    const posts = await Post.findAll()

    let titles = posts.map(p => {
        return p.title
    })

    return titles
}

/*
  Return an array of all the location coordinates
*/
function getAllLocations() { 
}

/*
  Delete the new post you added in the second test
*/
function deletePostYouAdded() {
    return Post.destroy({where: {title : "Awesome Title"}})  
}

/*
Associate User with userName = "okeson0" to posts with postId = [1,3,5]
and return the user obj after association is done 
*/

async function associateUserToPosts(){
    const user = await User.findByPk("okeson0")
    console.log(user.userName)
    const posts = await Post.findAll({where: {id : {[Op.in] : [1,3,5]} } }) 

    posts.forEach(post => {
        console.log(post.title)
    });

    await user.setPosts([...posts])

    return user
}

/*
Associate Comments with id in [1,3,4,6,8] to post with postId = 2
and user with userName = "okeson0"
*/

async function associateCommentToUserAndPost (){
    const user = await User.findByPk("okeson0")
    const post = await Post.findByPk(2)

    const comments = await Comment.findAll({where: {id : {[Op.in] : [1,3,4,6,8]} } })

    await user.setComments([...comments])
    await post.setComments([...comments])
}


/*
Associate Posts with id in [1,5] to Category with id in [3,4]
return the categories array
*/

async function associateCategoryToPost() {
    const posts = await Post.findAll({where: {id : {[Op.in] : [1,5]} } })
    const categories = await Category.findAll({where: {id : {[Op.in] : [3,4]} } })

    // console.log(categories)
    // console.log(posts)

    await posts[0].addCategories([...categories]) //can use set as well but set would replace previous associations with current
    await posts[1].addCategories([...categories]) //add will add this association on top of existing associations. 

    const cats = await posts[0].getCategories()
    // console.log(cats)   

    const cats2 = await posts[1].getCategories()
    // console.log(cats2)   


    return categories
}


/*
Retrieve the user and post associated to comment with id = 1
return an object containing 
{
    user: "userName",
    post: "postId"
}
*/

async function getAssociationsToComment(){
    const commentInst = await Comment.findByPk(1)

    const user = await commentInst.getUser()
    const post = await commentInst.getPost()

    let obj = {
        user: user.userName,
        post: post.id
    }

    return obj
}

module.exports = {
  insertNewLocation,
  insertNewPost,
  getLocationWithId2,
  getAllPosts,
  getAllLocations,
  deletePostYouAdded,
  associateUserToPosts,
  associateCommentToUserAndPost,
  associateCategoryToPost,
  getAssociationsToComment
};
