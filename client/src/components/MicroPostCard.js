import React from "react";
import { Link } from "react-router-dom";

function MicroPostCard({ content, createdAt, id }) {
  const total = 10;
  return (
    <div className="col-10 col-md-8 col-lg-7">
      <div className="d-flex card">
        <div className="me-auto p-2 card-body card-text">
          <Link to={"/posts/" + id}>{content}</Link>
        </div>
        <div>{total}</div>
        <div className="card-footer small text-muted text-end">
          {createdAt.slice(0, -14)}
        </div>
      </div>
    </div>
  );
}

export default MicroPostCard;
