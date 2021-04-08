import React from 'react';
import { Link } from 'react-router-dom';
import './Mapview.css'


function Mapview() {
  return (
    <div className="col-10 col-md-8 col-lg-7 p-0 ">
      <div className="map-container">
        <div className="map-controls">
          <div className="my-1 shadow">
            <svg width="30" height="30" version="1.1" viewBox="0 0 79.375 79.375" xmlns="http://www.w3.org/2000/svg"><g transform="translate(261.77 26.254)" opacity=".998"><path d="m-261.77-26.254h79.375v79.375h-79.375v-79.375z" fill="#5f5fd3"/><path d="m-228.69-13.025v19.844h-19.844v13.229h19.844v19.844h13.229v-19.844h19.844v-13.229h-19.844v-19.844h-13.229z" fill="#f9f9f9" opacity=".997"/></g></svg>
          </div>
          <div className="my-1 shadow">
            <svg width="30" height="30" version="1.1" viewBox="0 0 79.375 79.375" xmlns="http://www.w3.org/2000/svg"><g transform="translate(260.96 26.353)" opacity=".998"><g transform="translate(-100.65 .73077)" opacity=".998"><rect x="-160.32" y="-27.083" width="79.375" height="79.375" fill="#5f5fd3"/><path d="m-147.09 19.219v-13.229h52.917v13.229z" fill="#f9f9f9" opacity=".997"/></g></g></svg>
          </div>
        </div>
      </div>
      { /* this list is to demonstrate the layout. can be populated from the DB later */ }
      <div className="filters-container shadow"> 
        <button type="button" class="btn btn-primary m-1">Restaurant</button>
        <button type="button" class="btn btn-primary m-1">Hotel</button>
        <button type="button" class="btn btn-primary m-1">Pool</button>
        <button type="button" class="btn btn-primary m-1">Beach</button>
        <button type="button" class="btn btn-primary m-1">Park</button>
        <button type="button" class="btn btn-primary m-1">Attraction</button>
        <button type="button" class="btn btn-primary m-1">Landmark</button>
        <button type="button" class="btn btn-primary m-1">Historic Site</button>
        <button type="button" class="btn btn-primary m-1">Pet Friendly</button>
        <button type="button" class="btn btn-primary m-1">Museum</button>
        <button type="button" class="btn btn-primary m-1">Bar</button>
        <button type="button" class="btn btn-primary m-1">Club</button>
        <button type="button" class="btn btn-primary m-1">Landmark</button>
        <button type="button" class="btn btn-primary m-1">Landmark</button>
        <button type="button" class="btn btn-primary m-1">Landmark</button>
      </div>
    </div>
  );
}

export default Mapview;