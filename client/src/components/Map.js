import React, { Component } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
const apiKey = process.env.REACT_APP_MAP_API 


const containerStyle = {
  width: '1060px',
  height: '500px',
  border: '5px solid black',
  borderRadius: '10px',
  boxShadow: '10px 10px 8px #750eeb'
};



class Map extends Component {
    constructor(props){
        super(props);
        this.state= {
            position : {
                lat: this.props.position.lat,
                lng: this.props.position.lng
            } 
        }
    }

    onMarkerDragEnd = ( event ) => {
        console.log( 'event', JSON.stringify(event) );
        let newLat = event.latLng.lat(),
         newLng = event.latLng.lng()

         this.setState(prevState => {
            let position = { ...prevState.position };
            position.lat = newLat;
            position.lng = newLng;
            return {position}
        })

        this.props.onLocationChange(this.state.position.lat, this.state.position.lng)


    }

  render() {
    return (
        <LoadScript
        googleMapsApiKey= {apiKey}
        >
            <GoogleMap
            mapContainerStyle={containerStyle}
            center={this.state.position}
            zoom={10}
            >
            <Marker 
            draggable={true}
            onDragEnd={ this.onMarkerDragEnd }
            position={this.state.position} 
            />  

            </GoogleMap>
        </LoadScript>
      
    )
  }
}

export default Map;
