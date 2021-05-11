import React, {useEffect, useState, props} from 'react'
import Link from 'react-router-dom'
// eslint-disable-next-line 
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
//GOOGLE MAP
function Map({highSchoolData}) {
const [code, setCode] = useState();
const [addresses, setAddresses] = useState();
const [positions, setPositions] = useState();

useEffect(() => {
    if(highSchoolData){
    let addressTemp = {}
    let samePositions={}
    let tempCode = []
    highSchoolData.forEach(school => {
      let location = school.location.split('(')[0].trim()
      let tempPosition = {
        lat: parseFloat(school.latitude),
        lng: parseFloat(school.longitude),
      }
      if(addressTemp[location]){
        if(school.school_name.includes(', The')){
        addressTemp[location].push([school.school_name.split(",")[0], school.dbn]);
        }
        else{
          
          addressTemp[location].push([school.school_name, school.dbn]);
        
        }
        
      }else{
        if(school.school_name.includes(', The')){
          addressTemp[location] = [ [school.school_name.split(",")[0], school.dbn] ];
        }
        else{
          addressTemp[location] = [[school.school_name, school.dbn]];
        }
        samePositions[location] = tempPosition
        tempCode.push(location)
      }
      
      setAddresses(addressTemp)
      setPositions(samePositions)
      setCode(tempCode)
    });
  }
  else{
    setAddresses(null)
    setPositions(null)
    setCode(null)
  }

}, [highSchoolData])

let DefaultIcon = L.icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-violet.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

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
console.log(addresses)
console.log(positions)
//Change API sKEYs
    return(
      <MapContainer style={containerStyle} center={center} zoom={11} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {
            code && code.map((tcode,index) =>{
              
              return(
                <Marker key={index}
                  position={positions[tcode]}
                  icon = {DefaultIcon}
                >
                  <Popup >
                    <ul className="text-center">
                      {
                        addresses[tcode].map((array,index)=>{
                          return <li><a href={`/school/${array[1]}`} key={index} target="_blank">{array[0]}</a> </li>
                        })
                      }
                    </ul>
                  </Popup>
                </Marker>
              );
            })
          }
      </MapContainer>
    );
}

export default Map

