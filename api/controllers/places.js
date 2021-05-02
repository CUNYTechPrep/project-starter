const express = require("express");
const router = express.Router();
//const places = require("../controllers/places.json");
const { Place } = require("../models");

//    GET    /places
//    GET    /places/:id

router.get("/", (req, res) => {
  Place.findAll({}).then((place) => res.json(place));
  //res.json(places);
});
router.get("/:place_id", (req, res) => {
  const { place_id } = req.params;
  Place.findOne({ where: { place_id: place_id } }).then((place) =>
    res.json(place)
  );
  //res.json(places.find((place) => place.place_id == id));
});

module.exports = router;
