import React from 'react';
import { Link } from 'react-router-dom';

function Card({ content, name, id }) {
  return (
    <div className="col-10 col-md-8 col-lg-7 m-auto pt-4">
      <div className="card mb-4 shadow">
        <div className="card-header text-left">
          { name }
        </div>
        <div className="card-body card-text">
          {content}
        </div>
      </div>
    </div>
  );
}

export default Card;
//<Link to={"/posts/"+id}>{ content }</Link>