import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// fetch('/api/places?lat=40.7074142&lng=-74.002628&keyword=brigante')
//   .then(res => res.json())
//   .then(res => console.log(res))
var options = {
  enableHighAccuracy: true,
  timeout: 50000,
  maximumAge: 0
};

function success(pos) {
  var crd = pos.coords;
  var lng = pos.coords.longitude;
  var lat = pos.coords.latitude;
  fetch('/api/places?lat=' + lat + '&lng=' + lng + '&keyword=bar')
    .then(res => res.json())
    .then(res => console.log(res))

  console.log('Your current position is:');
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
  sessionStorage.setItem("lat", lat);
  sessionStorage.setItem("lng", lng);
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);
