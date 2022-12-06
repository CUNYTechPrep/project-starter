// import { response } from "express";
import React, { useState } from "react";
// import { Navigate } from "react-router-dom";
// import ErrorAlert from "../components/ErrorAlert";

function MediaResult({title, year, network,genres, ended, entryNum}) {
  return (
    <div> 
      <strong>{title} ({year.substring(0,4)}) </strong>
      <ul>
        <li>Network: {network}</li>
        <li>Genres: {genres+" "} </li> 
        <li>Ended: {ended}</li>      
      </ul>
      <br></br>
    </div>
  ); 
}

function TitleSearch() {
  const [content, setContent] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  // const [success, setSuccess] = useState(false);
  // const [error, setError] = useState(false);

  const handleContentChange = (event) => {
    setContent(document.getElementById('input').value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let showResponse = await fetch("https://api.tvmaze.com/search/shows?q=" + content)
      let showResults = await showResponse.json();
      setSearchResults(showResults);   

      // if (response.ok) {
      //   setSuccess(true);
      // } else {
      //   setError(true);
      // }
    } catch (error) {
      console.error("Server error while creating a new micro post", error);
      setSearchResults([]);
      // setError(true);
    }    
  };

  // if (success) return <Navigate to="/" />;

  return (
    <div className="col-10 col-md-8 col-lg-7">
      {/* {error && <ErrorAlert details={"Failed to save the content"} />} */}
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            id = 'input'
            type="text"
            placeholder="Enter the title of a movie or TV show..."
            value={content}
            className="form-control"
            onChange={handleContentChange}
            autoFocus
          />
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </div>
        <div><br></br>
          {searchResults.map((data) => (
            <MediaResult 
              title = {data.show.name} 
              year = {(!data.show.premiered && "N/A") || data.show.premiered}
              network = {(!data.show.network && "N/A") || data.show.network.name}
              genres = { ((data.show.genres).length !== 0 && data.show.genres) || (data.show.genres && "N/A")} 
              ended = {(!data.show.ended && "N/A") || data.show.ended}                          
              key = {data.show.externals.imdb}
              // entryNum = {data} 
            />
          ))}
          {searchResults.length === null && <strong><p>No results found</p></strong>}
        </div>
      </form>
    </div>
  );
}

export default TitleSearch;