const router = require("express").Router()
const { Model } = require("sequelize")
const { User } = require("../models")
const passport = require("../middlewares/authentication")

//router.get("/", passport.isAuthenticated(), (req, res) => { }

router.get("/", passport.isAuthenticated(), (req, res) => {
    //User.findAll().then(Users => res.send(Users))
    let email = 'test@test.com'; //hard coded test
    // option one (email passed a parameter will be req.params.email) 
    //let email = req.params.email;
    //console.log("Email value!", req.params.email);
    //http://localhost:8080/api/profile?email='test@test.com'
    // option two (email will be retrieved from passport)
    //method from passport is need to be able to retrieve the user, it's in the middleware libaray
    // 
    User.findOne({ where: { email } }).then(U => res.send(U));

    
    
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

router.post("/:id", passport.isAuthenticated(), (req, res) => {
    User.update(
        {firstName: "test"},
        {returning: true, where: {id: req.params.id} }
      )
      .then(function([ rowsUpdate, [updatedProfile] ]) {
        res.json(updatedProfile)
      })
      .catch(next)
    console.log("Testing post");
    // res.json({
    //     title: req.params.id,
    //     description: 'A short description about this app',
    //   });
});

module.exports = router
