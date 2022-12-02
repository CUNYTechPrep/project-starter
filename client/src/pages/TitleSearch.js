import React, { useState } from "react";
// import { Navigate } from "react-router-dom";
// import ErrorAlert from "../components/ErrorAlert";
// import MicroPostCard from "../components/MicroPostCard";

function MicroPostCard( props ) {  
  const { title, year } = props.movieInfo
  return (
    <div className="col-10 col-md-8 col-lg-7">
      <div className="card mb-4 shadow">
        <div className="card-body card-text">
          {/* <Link to={"/posts/" + id}>{content}</Link> */}
          <ul>
            <li><strong>{title}, ({year})</strong></li><br></br>
          </ul>
        </div>
      </div>
    </div>
  );
}

function TestFunction () {
  // const [content, setContent] = useState("");
  const [results, setResults] = useState([]);

  return (
    <div>
      <div className="col-10 col-md-8 col-lg-7">
      <div className="card mb-4 shadow">
        <div className="card-body card-text">
          {/* <Link to={"/posts/" + id}>{content}</Link>
          <ul>
            <li><strong>{title}, ({year})</strong></li><br></br>
          </ul> */}
          <TitleSearch
              setResults = {setResults}
          />
        <div>
          {results.map((movieData) => {
            return <MicroPostCard movieInfo = {movieData}/>
          })}
        </div>
        </div>
      </div>
    </div>
    </div>
  )
}

function TitleSearch(props) {
  // const [content, setContent] = useState("");
  // const [results, setResults] = useState([]);
  // const [success, setSuccess] = useState(false);
  // const [error, setError] = useState(false);

  // const handleContentChange = (event) => {
  //   setContent(event.target.value);
  // };

  // const handleSubmit = async (event) => {
    // event.preventDefault();
    // async function getData() {
      
    // };

    // try {
      // let response = await fetch("/api/media", {
      //   method: "GET",
      //   credentials: "include",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     content: content,
      //   }),
      // });        
      
      let userInput = document.getElementById('title').value;
      let myURL = "https://api.tvmaze.com/search/shows?q=" + userInput
      const callData = () => {
        fetch(myURL)
          .then((response) => {
            return response.json();
          })
          .then((datajson) => {
            props.setContent(datajson);
    
        })
      // let response = await fetch(myURL);
      // let allResults = await response.json();
      // console.log(allResults);
      // setResults(allResults);

      // if (response.ok) {
      //   setSuccess(true);
      // } else {
      //   setError(true);
      // }
    // } catch (error) {
    //   console.error("Server error while searching for title", error);
    //   // setError(true);
    // } 
    
    // setResults([])
  //   }
  }
    

  // if (success) return console.log(content);

  return (
    <div className="col-10 col-md-8 col-lg-7">
      {/* {error && <ErrorAlert details={"Failed to save the content"} />} */}
      {/* <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            placeholder="Enter a movie or TV show title here..."
            value={content}
            className="form-control"
            onChange={handleContentChange}
            autoFocus
          />
          <button type="submit" className="btn btn-primary">
            Search
          </button>
        </div>
      </form>   */}
      <div>
        <label for= "title">Title</label> 
          <input type="text" id="title" placeholder="type here..."
          onClick={(callData)}></input>
      </div>;
    </div>
  );
}

export default TestFunction;
