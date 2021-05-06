import React, {useEffect, useState, props} from 'react'
// eslint-disable-next-line 
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
//GOOGLE MAP
function Map({data}) {
const [ code, setCode] = useState();
const [ addresses, setAddresses] = useState();
const [positions, setPositions ] = useState();

useEffect(() => {
    if(data){
    let check = {}
    let samePositions={}
    let tempCode = []
    data.forEach(school => {
      let dict = school.location.split('(')[0].trim()
      let tempPosition = {
        lat: parseFloat(school.latitude),
        lng: parseFloat(school.longitude),
      }
      if(check[dict]){
        if(school.school_name.includes(', The')){
        check[dict].push(school.school_name.split(",")[0]);
        }
        else{
          
          check[dict].push(school.school_name);
        
        }
        
      }else{
        if(school.school_name.includes(', The')){
          check[dict] = [school.school_name.split(",")[0]];
        }
        else{
          check[dict] = [school.school_name];
        }
        samePositions[dict] = tempPosition
        tempCode.push(dict)
      }
      
      setAddresses(check)
      setPositions(samePositions)
      setCode(tempCode)
    });
  }
  else{
    setAddresses(null)
    setPositions(null)
    setCode(null)
  }

}, [data])

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
                    {
                      addresses[tcode].map((name,index)=>{
                        return <p className="text-center" key={index}>{name}</p>
                      })
                    }
                  </Popup>
                </Marker>
              );
            })
          }
      </MapContainer>
    );
}

export default Map


/*
return (
      <LoadScript
        googleMapsApiKey="AIzaSyBY-yZ1U_3rRxWt3srlxJj6Ue3vU7A1aJ4"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={11}
        >
          {
            data && data.map((school) =>{
              
              let position = {
                lat: parseFloat(school.latitude),
                lng: parseFloat(school.longitude),
              }
              console.log(school, position)
              return(
                <Marker key={school.dbn}
                  position={position}
                  title="SDSDSDSD"
                  onClick={(e)=> loadInfo(school.school_name, position)}
                >
                  </Marker>
              );
            })
          }
          
        </GoogleMap>
      </LoadScript>
    );*/