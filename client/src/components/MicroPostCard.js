import React from "react";
import { Link } from "react-router-dom";

function MicroPostCard({ content, createdAt, id }) {
  const total = 10;
  return (
    <div className="col-10 col-md-8 col-lg-7">
      <div className="d-flex flex-row justify-content-around card" style={{"width":"450px"}}>
        <div className="d-flex flex-row justify-content-between card-body align-text-center" style={{"width":"150px"}}>
          <Link to={"/posts/" + id}>{content}</Link>
          <div className="pt-1 text-endt">{total}</div>
        </div>
        <div className="card-body small text-muted text-end">
          {createdAt.slice(0, -14)}
        </div>
      </div>
    </div>
  );
}

export default MicroPostCard;
