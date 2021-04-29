import React, {useState} from 'react'
// eslint-disable-next-line 
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
  


//GOOGLE MAP
function Map() {
  let activeCard = ""  
  const center = {
  lat: 40.6930,
  lng: -74.0125
  };

  const containerStyle = {
    width: '100%',
    height: '100%',
    position: 'absolute',
    overflow: "hidden",
  };
//Change API KEY
    return (
      <LoadScript
        googleMapsApiKey="AIzaSyBY-yZ1U_3rRxWt3srlxJj6Ue3vU7A1aJ4"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={12}
        >
          { /* Child components, such as markers, info windows, etc. */ 
      
          }
          
        </GoogleMap>
      </LoadScript>
    );
}

export default Map