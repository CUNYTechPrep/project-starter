

// fetch('/api/places?lat=40.7074142&lng=-74.002628&keyword=brigante')
//   .then(res => res.json())
//   .then(res => console.log(res))
const options = {
  enableHighAccuracy: true,
  timeout: 50000,
  maximumAge: 0
};

// function success(pos) {
//   var crd = pos.coords;
//   var lng = pos.coords.longitude;
//   var lat = pos.coords.latitude;
//   fetch('/api/places?lat='+lat+'2&lng='+lng+'&keyword=pizza')
//   .then(res => res.json())
//   .then(res => console.log(res))
//
//   console.log('Your current position is:');
//   console.log(`Latitude : ${crd.latitude}`);
//   console.log(`Longitude: ${crd.longitude}`);
//   console.log(`More or less ${crd.accuracy} meters.`);
// }
//
function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}




const location = {
  getCurrLocation: (callback, err = error) => {
    navigator.geolocation.getCurrentPosition(callback, err, options),
  },
}

export default location;



// in a different file

import locations from '../services/location';

onClickHandler = (event) => {
  location.getCurrLocation((pos) => {
    var crd = pos.coords;
    var lng = pos.coords.longitude;
    var lat = pos.coords.latitude;
    fetch('/api/places?lat='+lat+'2&lng='+lng+'&keyword=pizza')
    .then(res => res.json())
    .then(res => {
      console.log(res)
      this.setState({ ....... })
    })
  })
}
