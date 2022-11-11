import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  GoogleMap,
  LoadScript,
  StreetViewPanorama,
} from "@react-google-maps/api";

const Map = (props) => {
  const [center, setCenter] = useState({ lat: 0, lng: 0 });
  const { address } = props;
  useEffect(() => {
    geoCode();
  }, [address]);

  //converts the address fetched from backend to lat and long
  const geoCode = () => {
    axios
      .get("https://maps.googleapis.com/maps/api/geocode/json", {
        params: {
          address: address,
          key: process.env.REACT_APP_API_KEY,
        },
      })
      .then(function (res) {
        setCenter({
          lat: res.data.results[0].geometry.location.lat,
          lng: res.data.results[0].geometry.location.lng,
        });
      })
      .catch(function (err) {
        console.log(err);
      });
  };
  //Google Map and Streetview
  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_API_KEY}>
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "400px" }}
        center={center}
        zoom={7}
      >
        <StreetViewPanorama
          position={center}
          visible={true}
          options={{ disableDefaultUI: true, scrollwheel: false }}
        />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
