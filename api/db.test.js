const db = require('./models');
const { Post, Location, Media, Comment, User, Category } = db;
const seed = require('./seed');

const {
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
} = require('./testQueries')

describe('Testing the Models', () => {
    beforeAll(() => {
      return seed();
    })

    test('insert new location', async () => {
        await insertNewLocation();
        locations = await Location.findAll();
        expect(locations.length).toBe(6);
    })
    
    test('insert new Post', async () => {
        await insertNewPost();
        posts = await Post.findAll();
        expect(posts.length).toBe(6);
    })
    
    test('get Location ID=2', async () => {
    expect(await getLocationWithId2()).toEqual({state : "New Jersey", city : "Jersey City"});
    })

    test('get all posts', async () => {
    expect(await getAllPosts()).toEqual(["Independence Day", "Men in Black II", "Seven Pounds", "Eagle Eye", "Tropic Thunder", "Awesome Title"]);
    })

    test('delete post you added', async () => {
    await deletePostYouAdded();
    posts = await Post.findAll();
    expect(posts.length).toBe(5);
    })

    test('Associate user okeson to posts', async () => {
        const user = await associateUserToPosts()
        const associations = await user.getPosts()

        expect(associations.length).toBe(3)
    })

    test('Associate comments to user and post', async () => {
        await associateCommentToUserAndPost()
        const associations = await Comment.findAll({
                                        include: [
                                            {
                                                model : User,
                                                required: true,
                                            }, 
                                            {
                                                model : Post,
                                                required: true,
                                            }
                                            
                                        ]
                                    });
        
        //This is doing an eager loading to find all comments that have associations to both a user and post. for now we are only making associations to 5 comments so we can test. 
        
        // console.log(associations)

        expect(associations.length).toBe(5)
    })

    test('Associate Categories to posts', async () => {
        const cats = await associateCategoryToPost()
        
        let size =2;
        let isTrue

        const arr1 = await cats[0].getPosts()
        const arr2 =await cats[1].getPosts()

        // console.log(arr1)
        // console.log(arr2)
        if(arr1.length === size && await arr2.length === size){
            isTrue = true
        }else {
            isTrue = false 
        }

        expect(isTrue).toBe(true)  
    })


    test('Get associations to Comment with id = 1', async () => {
        expect(await getAssociationsToComment()).toEqual({user : "okeson0", post : 2});
        })

})
