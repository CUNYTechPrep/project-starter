import React from 'react'
import { Link } from "react-router-dom";

function Button() {
  return (
    <div className="col-10 col-md-8 col-lg-7">
      <div className="card mb-4 shadow">
        <Link to={"/posts/new"}>
            <button type="button" className="btn btn-primary btn-block w-100">Add New Property </button>
        </Link>
      </div>
    </div>
  );
}

export default Button;