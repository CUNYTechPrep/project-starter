import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Heart from "react-heart";
import '../styles/homePage.css';

function Bookmark({schoolName, schoolID, userID}) {

  const [active, setActive] = useState(true);
  console.log("profile bookmark: " + schoolID);

  function setUserBookmark(){
    if(userID){
      if(active){ // delete bookmark
        fetch('http://localhost:8080/api/bookmarks/delete', {
                  method: 'DELETE',
                  headers: {
                      'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({userUUID: userID,
                                        schoolDBID: schoolID}),
              })
              .then(
                console.log("deleted bookmark")
              )
              .catch((error) => {
                  console.error('Error:', error);
              });
      }
      setActive(!active);
      window.location.reload();
      return;
    }
    else{
      alert("You must be a user to favorite schools!");
      return;
    }
  }
  
  return (
    <div className="col-10 col-md-8 col-lg-10 m-auto pt-4">
      <div className="card mb-4 shadow">
        <div className="card-header " style={{textAlign:"center"}}>
          <div className="row">
            <div className="col-11">
              <h4>{schoolName}</h4>
            </div>
            <div className="ml-auto" style={{ width: "2rem", height:"2rem" }}>
              <Heart isActive={(active)} onClick={() => setUserBookmark()} animationScale = {1.25} style = {{marginBottom:'1rem'}}/>
            </div>
          </div>
        </div>
        
        <div className="card-body card-text text-center ">
          <button className="btn" type="button"  
                        aria-haspopup="true" aria-expanded="true">
                    Show more info
                    <span className="caret"></span>
                </button>
        </div>
      </div>
    </div>
  );
}

export default Bookmark;
