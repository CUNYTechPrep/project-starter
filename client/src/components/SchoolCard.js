import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/homePage.css'
function Card({ content, name, id }) {
  return (
    <div className="col-10 col-md-8 col-lg-7 m-auto pt-4">
      <div className="card mb-4 shadow">
        <div className="card-header text-left ">
          { name }
        </div>
        <div className="card-body card-text text-center ">
          <p>{content.location.split(" (")[0]}</p>
          <div className="dropdown-divider"></div>
          <p>{content.subway}</p>
          <div className="dropdown-divider"></div>
          <p>{content.bus} </p>
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

export default Card;
//<Link to={"/posts/"+id}>{ content }</Link>