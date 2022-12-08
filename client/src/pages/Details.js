import React from "react";
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

 function FormatResults({title, year, network, genres, ended, imdbNumber, image, plot}) { 
  // determines the lifecycle/ runs only at the beginning
    
       //createRating(5)
        return ( 
            <div>              
                <h1>{title} ({year})</h1>
                {plot}
                 
            </div>
        )
    }

function getImdbString(id) {   //copies the imdb from the route
   
    const text = JSON.stringify({ id });  // creater a string from an object
    const imdb = text.substring(7, 16);
    return imdb;
}
 function createMedia(id){
 
    return fetch("/api/media_/" + id, {
        method: 'POST',
        credentials: "include",
        headers: {
          'Content-Type': 'application/json',
        },
      })
   
      .then(response => {
        return response.text();
      })
      .then(data => {
        alert(data);
     
      });
  };
    

  function createRating(id,ratingValue){

  return  fetch("/api/media_/value/" +id +"/rate/"+ ratingValue, { 
        method: 'POST',
        credentials: "include",
        headers: {
          'Content-Type': 'application/json',
        },

      })
      .then(response => {
        return response.text();
      })
      .then(data => {
       // alert(data);
     
      });
  };
    
 
const Details = () => {
    const [searchResults, setSearchResults] = useState([]);
    const {id} = useParams()
    const imdbID = getImdbString(id)
     // console.log(imdbID);
      useEffect(() => { createMedia(imdbID); createRating(imdbID,3)}, [imdbID]) 
        // put creatingRating in event
      useEffect (() => {
        async function getData() {

            let response = await fetch("https://api.tvmaze.com/lookup/shows?imdb=" + imdbID)
            let results = await response.json()

            setSearchResults(results)
        }

        getData();

        return() => {

        };

    }); 
    return (

        <div>
            <FormatResults 
              title = {searchResults.name} 
              year = {searchResults.premiered}
            //   network = {(!data.show.network && "N/A") || data.show.network.name}
            //   genres = { ((data.show.genres).length !== 0 && data.show.genres) || (data.show.genres && "N/A")} 
            //   ended = {(!data.show.ended && "N/A") || data.show.ended}
            //   imdbNumber = {searchResults.externals}
            //   image = {searchResults.image.medium} 
               plot = {searchResults.summary}                          
            //   key = {data.show.externals.imdb}
            
            />
        </div>
    );

   
}

export default Details;
