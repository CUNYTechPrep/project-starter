const fs = require('fs');
const parse = require('csv-parse/lib/sync');

const data = fs.readFileSync('api/google_transit/stops.csv');
const records = parse(data, { columns: true });


const stops = []
const stopId = {};
const stopName = {};

records.forEach((rec) => {
  stops.push(rec)
  stopId[rec.stop_id] = rec
  stopName[rec.stop_name] = rec
})

// Find stop name using stop id
function findStopName(_stopId) {
  if(_stopId in this.stopId) {
    return stopId[_stopId].stop_name
  }
  return null
}

// Find stop id using stop name
function findStopId(_stopName) {
  if(_stopName in this.stopName) {
    return stopName[_stopName].stop_id
  }
  return null
}

module.exports = { stops, stopId, stopName, findStopName};
