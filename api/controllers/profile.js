const router = require("express").Router()
const { Model } = require("sequelize")
const { User } = require("../models")
const { Profile } = require("../models")
const passport = require("../middlewares/authentication")

//router.get("/", passport.isAuthenticated(), (req, res) => { }

router.get("/", passport.isAuthenticated(), (req, res) => {
    User.findAll().then(Users => res.send(Users))
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
    console.log("Testing")
})

router.post("/:id", passport.isAuthenticated(), (req, res) => {
    
})

module.exports = router
