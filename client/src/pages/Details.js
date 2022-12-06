import React from "react";
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

 function FormatResults({title, year, network, genres, ended, imdbNumber, image, plot}) {
        return (
            <div>              
                <h1>{title} ({year})</h1>
            </div>
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
    
    const imdbID = ImdbString()

    // fetch(myUrl)
    //     .then((response) => {
    //         return response.json();
    //     })
    //     .then((datajson) => {
    //         setSearchResults(datajson);
    //        console.log(datajson)
    //     })
    // setSearchResults([])
    //     console.log(searchResults)

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
            //   imdbNumber = {data.show.externals.imdb}
            //   image = {data.show.image.medium} 
            //   plot = {data.show.summary}                          
            //   key = {data.show.externals.imdb}
            
            />
        </div>
    );

   
}

export default Details;
