import React from "react";
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"



function FormatResults({ title, year, network, genres, ended, imdbNumber, image, plot, avg, comment }) {
  // determines the lifecycle/ runs only at the beginning

  let content = JSON.stringify({ plot })
  let content1 = content.substring(12, content.length - 6)
  let content2 = content1.replace('<b>', '').replace('</b>', '').replace('<i>', '').replace('</i>', '').replace('<p>', '').replace('</p>', '')
  return (

    <div>

      <h1>{title} ({year}) </h1>
      <div className="container" >

        <div className="row">
          <div className="col">
            <img src={image} alt="pic" height="200" width="300" />
            <div>
           <span> &#11088;</span>{avg}
            </div>
            <div>
            <div  id="stars"class="rate">
    <input type="radio" id="star1" name="rate" value="1" />
    <label for="star1" title="text">1 star</label>
    <input type="radio" id="star2" name="rate" value="2" />
    <label for="star2" title="text">2 stars</label>
    <input type="radio" id="star3" name="rate" value="3" />
    <label for="star3" title="text">3 stars</label>
    <input type="radio" id="star4" name="rate" value="4" />
    <label for="star4" title="text">4 stars</label>
    <input type="radio" id="star5" name="rate" value="5" />
    <label for="star5" title="text">5 stars</label>
       onClick({})
  </div>
            </div>
          
          </div>
          <div className="col">
            {content2}

          </div>
        </div>

      </div>
    </div>
  )
}



function ShowComments(props) { 
  
     const {Content} = props.comment
        return ( 
            <div>  
              {Content|| " none"}
            </div>
        )
    }

function getImdbString(id) {   //copies the imdb from the route

  const text = JSON.stringify({ id });  // creater a string from an object
  const imdb = text.substring(7, text.length - 2);
  return imdb;
}
async function createMedia(id) {

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
      //  alert(data);

    });
};


async function createRating(id, ratingValue) {

  return fetch("/api/media_/" + id + "/" + ratingValue, {
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

async function createComment(id, text) {

  return fetch("/api/media_/comments/for/" + id + "/" + text, {
    method: 'POST',
    credentials: "include",
    headers: {
      'Content-Type': 'application/json',
    }, 

  })
    .then(response => {
      return response.text();
    })

};




const Details = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [avg, setAvg] = useState([]);
  const [comments, setComments] = useState([])
  const test = "uhfkwhcihicuiu"
  const { id } = useParams()
  const imdbID = getImdbString(id)
  console.log(imdbID);

  useEffect(() => {
    async function createRecords() {  // wrapper to sync calls
       await createMedia(imdbID);
       await createRating(imdbID, 5) // 
      await createComment(imdbID, test)


       let response1 = await fetch("/api/media_/ratings/avarage/" + imdbID)
       let results1 = await response1.json();
       setAvg(results1);

      let response2 = await fetch("/api/media_/comment/"+ imdbID )
      let results2 = await response2.json();
      setComments(results2)
    }

    createRecords();

  }, [imdbID]);


  // put creatingRating in event

  useEffect(() => {
    async function getData() {

      let response = await fetch("https://api.tvmaze.com/lookup/shows?imdb=" + imdbID)
      let results = await response.json();
      setSearchResults(results)

      // // let response1 = await fetch("/api/media_/ratings/avarage/" + imdbID)
      // // let results1 = await response1.json();
      // // setAvg(results1);

      // let response2 = await fetch("/api/media_/comments/" + imdbID)
      // let results2 = await response2.json();
      // setComments(results2)
    }

    getData();

    return () => {

    };

  },[imdbID]);
  // useEffect(() => {
  //   async function getData1() {

  //     let response2 = await fetch("/"+ imdbID )
  //     let results2 = await response2.json();
  //     setComments(results2)
  //   }

  //   getData1();

   

  // },[]);
  return (


    <div>
       <div>
    

       </div>
      <FormatResults
        title={searchResults.name}
        year={searchResults.premiered}
        avg={avg.avgRating}
       
        //       comment = {comments}
      
        //   network = {(!data.show.network && "N/A") || data.show.network.name}
        //   genres = { ((data.show.genres).length !== 0 && data.show.genres) || (data.show.genres && "N/A")} 
        //   ended = {(!data.show.ended && "N/A") || data.show.ended}
        //   imdbNumber = {searchResults.externals}
        image={searchResults?.image?.medium || "none"}

        plot={searchResults.summary}
      //   key = {data.show.externals.imdb}

       /> <div>
          {comments.map((words)=>{
            return <ShowComments comment = {words}  />

          })}
       </div>
        
      
    </div>
  );


}

export default Details;
