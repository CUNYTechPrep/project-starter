const fs = require("fs");
const fetch = require("node-fetch");
const place_types = ["restaurant", "bar"];
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

const url_base =
  "https://maps.googleapis.com/maps/api/place/nearbysearch/json?";
const radius = 1500;

const center_locs = [
  { latitude: 40.704813, longitude: -73.905948 },
  { latitude: 40.704813, longitude: -73.905948 },
  { latitude: 40.72373, longitude: -73.735795 },
  { latitude: 40.762465, longitude: -73.979993 },
  { latitude: 40.821928, longitude: -73.939159 },
  { latitude: 40.8625, longitude: -73.853519 },
];

//const center_loc = { latitude: 40.704813, longitude: -73.905948 }

let places = [];

let results = {};

const fetch_places = function () {
  center_locs.map((center) => {
    const urlParams = [
      `location=${center.latitude},${center.longitude}&radius=${radius}&type=restaurant&key=${GOOGLE_API_KEY}`,
      `location=${center.latitude},${center.longitude}&radius=${radius}&type=bar&key=${GOOGLE_API_KEY}`,
    ];
    urlParams.map((urlParam) => {
      fetch(url_base + urlParam)
        .then((json_response) => json_response.json())
        .then((data) => {
          results = data;
        })
        .then(() => {
          results.results.map((place) => {
            places.push(place);
          });
          if (center == center_locs[center_locs.length - 1]) {
            console.log(places.length);
            fs.writeFile(
              "places.json",
              JSON.stringify(places),
              function (err, result) {
                if (err) console.log("error", err);
              }
            );
          }
        });
    });
  });
};

fetch_places();
