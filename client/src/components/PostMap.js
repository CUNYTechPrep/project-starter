//Use this map component for the posts 
//this component would take a position object as a prop 
// example: <PostMap position={{lat: 20.12131, lng: -90.121312312}}/>


import React, { Component } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
const apiKey = process.env.REACT_APP_MAP_API 


const containerStyle = {
  width: '600px',
  height: '400px'
};



class PostMap extends Component {
    constructor(props){
        super(props);
        this.state= {
            position : {
                lat: this.props.position.lat,
                lng: this.props.position.lng
            } 
        }
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
        position={this.state.position} 
        />  

        </GoogleMap>
      </LoadScript>
    )
  }
}

export default PostMap;