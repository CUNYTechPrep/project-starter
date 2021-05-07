import React, {useEffect, useState, props} from 'react'
// eslint-disable-next-line 
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
//GOOGLE MAP
function Map({data, name}) {

useEffect(() => {


}, [data])

let DefaultIcon = L.icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-violet.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

  const containerStyle = {
    width: '100%',
    height: '50%',
    position: 'absolute',
    overflow: "hidden",
  };

//Change API sKEYs
    return(
        <div>
            {
                data && 
                <MapContainer style={containerStyle} center={{lat: data.latitude, lng: data.longitude}} zoom={16} scrollWheelZoom={false}>
                <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                    
                        <Marker
                            position={{lat: data.latitude, lng: data.longitude}}
                            icon = {DefaultIcon}
                            >
                            <Popup >
                                {name}
                            </Popup>
                            </Marker>
                </MapContainer>
            }
        </div>
    );
}

export default Map
