const express = require('express');
const router = express.Router();

const googleMapsClient = require('@google/maps').createClient({
  key: process.env.GOOGLE_MAPS_API_KEY
});

router.get('/', (req, res) => {
  const {keyword, ...location} = req.query;
  googleMapsClient.placesNearby({
    location: location,
    keyword: keyword,
    radius: 500,
  }, (err, google) => {
    if (err) {
      res.json(err);
    }
    res.json(google);
  })
});

module.exports = router;
