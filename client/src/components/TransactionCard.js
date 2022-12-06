import React from "react";
import { Link } from "react-router-dom";
import DeleteCategory from "./DeleteCategory";


function TransactionCard({ content, createdAt, id }) {
  const total = 10;
  return (
    <div className="col-10 col-md-8 col-lg-7">
      <div className="d-flex flex-row justify-content-around card" style={{"width":"450px"}}>
        <div className="d-flex flex-row justify-content-between card-body align-text-center" style={{"width":"150px"}}>
        <div className="card-footer small text-muted text-end">
          {createdAt.slice(0, -14)}
        </div>
          <div>{content}</div>
          <div className="pt-1 text-endt">{total}</div>
        </div>
        <DeleteCategory id={id}/>
      </div>
    </div>
  );
}
{/* <div className="col-10 col-md-8 col-lg-7">
      <div className="card mb-4 shadow">
        <div className="card-body card-text">
          <Link to={"/posts/" + id}>{content}</Link>
        </div>
        <div className="card-footer small text-muted text-end">{createdAt}</div>
      </div>
    </div> */}

export default TransactionCard;
