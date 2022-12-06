
import React from "react";
import { useParams } from "react-router-dom"
import { useState } from "react"

 function FormatResults({title, year, network,genres,ended,imdbNumber,image,plot}) {
        return (
            <h1 >
                {title}
            </h1>
        )
    }

function ImdbString() {   //copies the imdb from the route
    const { id } = useParams();
    const text = JSON.stringify({ id });  // creater a string from an object
    const imdb = text.substring(7, 16);
    return imdb;
}

const Details = () => {
    const [searchResults, setSearchResults] = useState([]);

    console.log(ImdbString)

    const myUrl = "https://api.tvmaze.com/lookup/shows?imdb=" + ImdbString();

    fetch(myUrl)
        .then((response) => {
            return response.json();
        })
        .then((datajson) => {
            setSearchResults(datajson);
           console.log(datajson)
        })
   // setSearchResults([])
        console.log(searchResults)
    return (

        <div>
               
        {searchResults.map((data) => (
            <FormatResults 
              title = {data.show.name} 
              year = {(!data.show.premiered && "N/A") || data.show.premiered}
              network = {(!data.show.network && "N/A") || data.show.network.name}
              genres = { ((data.show.genres).length !== 0 && data.show.genres) || (data.show.genres && "N/A")} 
              ended = {(!data.show.ended && "N/A") || data.show.ended}
              imdbNumber = {data.show.externals.imdb}
              image = {data.show.image.medium} 
              plot = {data.show.summary}                          
              key = {data.show.externals.imdb}
            
            />
            
          ))}
        </div>
    );

   
}

export default Details;
