const express = require("express");
const router = express.Router();
const places = require("../controllers/places.json");

//    GET    /places
//    GET    /places/:id

router.get("/", (req, res) => {
  //Post.findAll({}).then((posts) => res.json(posts));
  res.json(places);
});
router.get("/:id", (req, res) => {
  //Post.findAll({}).then((posts) => res.json(posts));
  const { id } = req.params;
  res.json(places.find((place) => place.place_id == id));
});

module.exports = router;
