const express = require('express');
const morgan = require('morgan');
const path = require('path');
const db = require('./models');
const app = express();
const PORT = process.env.PORT;

// this lets us parse 'application/json' content in http requests
app.use(express.json());

// add http request logging to help us debug and audit app use
const logFormat = process.env.NODE_ENV==='production' ? 'combined' : 'dev';
app.use(morgan(logFormat));

// this mounts controllers/index.js at the route `/api`
app.use('/api', require('./controllers'));

// for production use, we serve the static react build folder
if(process.env.NODE_ENV==='production') {
  app.use(express.static(path.join(__dirname, '../client/build')));

  // all unknown routes should be handed to our react app
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}

// update DB tables based on model updates. Does not handle renaming tables/columns
// NOTE: toggling this to true drops all tables (including data)
db.sequelize.sync({ force: false });

/////////////////////////////////////////////////////////////

const urls = [
  'https://api-endpoint.mta.info/Dataservice/mtagtfsfeeds/nyct%2Fgtfs-ace',
  'https://api-endpoint.mta.info/Dataservice/mtagtfsfeeds/nyct%2Fgtfs-bdfm',
  'https://api-endpoint.mta.info/Dataservice/mtagtfsfeeds/nyct%2Fgtfs-g',
  'https://api-endpoint.mta.info/Dataservice/mtagtfsfeeds/nyct%2Fgtfs-jz',
  'https://api-endpoint.mta.info/Dataservice/mtagtfsfeeds/nyct%2Fgtfs-nqrw',
  'https://api-endpoint.mta.info/Dataservice/mtagtfsfeeds/nyct%2Fgtfs-l',
  'https://api-endpoint.mta.info/Dataservice/mtagtfsfeeds/nyct%2Fgtfs',
  'https://api-endpoint.mta.info/Dataservice/mtagtfsfeeds/nyct%2Fgtfs-7',

]

const traindb = require('./gtfsData');
const trainfn = require('./trainFunctions')

// Testing
app.get('/', (req, res) => {
  res.json({
    page: '/',
    test: 'Yay, successful!'
  });
});

// Testing
app.get('/line', (req, res) => {
  res.json({
    page: '/line',
    test: 'Yay, successful!'
  });
});

// Return all the stations for a train line and the the live time of the trains going to those stations
app.get('/line/:train', (req, res) => {
  const train = req.params.train
  var tripData = []
  var stationMap = {}
  trainfn.getTrips(urls, tripData, () => {
    trainfn.findTrainStops(train, tripData, stationMap)
    trainfn.updateTrainStops(train, tripData, stationMap)
    // Sort by StopId
    stationMap = Object.keys(stationMap).sort().reduce(
      (obj, key) => { 
        obj[key] = stationMap[key]; 
        return obj;
      }, 
      {}
    );
    res.send(JSON.stringify(stationMap))
  })
});

app.get('/station/:station', (req, res) => {
  const station = req.params.station
  relevantStops = {}
  var tripData = []
  trainfn.getTrips(urls, tripData, () => {
    trainfn.findTrainStation(station, tripData, relevantStops)
    trainfn.updateNearbyStops(tripData, relevantStops)
    res.send(JSON.stringify(relevantStops))
  })
})

// Return nearby station names  based on lat,lon and min distance in KM
app.get('/stops/nearby/lat/:lat/lon/:lon/dist/:dist', (req, res) => {
  const lat = req.params.lat
  const lon = req.params.lon
  const dist = req.params.dist
  nearbyStops = {}
  // Using the stop names, I get all the trains arriving/departing
  var tripData = []
  trainfn.getTrips(urls, tripData, () => {
    trainfn.findNearbyStops(lat, lon, dist, tripData, nearbyStops)
    trainfn.updateNearbyStops(tripData, nearbyStops)
    res.send(JSON.stringify(nearbyStops))
  })
});


// start up the server
if(PORT) {
  app.listen(PORT, () => console.log(`Listening on ${PORT}`));
} else {
  console.log("===== ERROR ====\nCREATE A .env FILE!\n===== /ERROR ====")
}
