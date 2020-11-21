const router = require("express").Router()
const { Model } = require("sequelize")
const { User } = require("../models")
const passport = require("../middlewares/authentication")

//router.get("/", passport.isAuthenticated(), (req, res) => { }

router.get("/", passport.isAuthenticated(), (req, res) => {
    //User.findAll().then(Users => res.send(Users))
    //let email = 'test@test.com'; //hard coded test
    // option one (email passed a parameter will be req.params.email) 
    let email = req.query.email;
    console.log("Email value!", req.query.email);
    //http://localhost:8080/api/profile?email='test@test.com'
    // option two (email will be retrieved from passport)
    //method from passport is need to be able to retrieve the user, it's in the middleware libaray
    // 
    User.findOne({ where: { email } }).then(U => res.status(200).json(U))
      .catch((err) => { res.status(400).json({ msg: 'User Failed', err: 'bad request' }); });

    
    
    //Model.sync().then(function(err) {
    // insert new user
    // Profile.create({
    //     school: "cuny",
    //     graduatingYear: 2019,
    //     classes: "super1, super2",
    //     major: "art"

    // }).then(function(user) {
    //     // you can now access the newly created user via the variable user
    //     console.log(user);
    // }, function(err){
    //  console.log(err);

    // });
    //});
    console.log("Testing");
});


router.get("/:email", passport.isAuthenticated(), (req, res) => {
  
  let email = req.params.email;
  console.log("Email value!", req.params.email);
 
  User.findOne({ where: { email } }).then(U => res.status(200).json(U))
    .catch((err) => { res.status(400).json({ msg: 'User Failed', err: 'bad request' }); });

  

  console.log("Testing");
});

router.post("/", passport.isAuthenticated(), (req, res) => {
  console.log(req.query.firstName)
    User.update(
        {firstName: req.query.firstName,
        lastName: req.query.lastName},
        {returning: true, where: {id: req.query.id} }
    )
      .then(function([ rowsUpdate, [updatedProfile] ]) {
        res.json(updatedProfile)
      })
      .catch((err) => { res.status(400).json({ msg: 'User update Failed', err: err }); });
    console.log("Testing post");
});

module.exports = router
