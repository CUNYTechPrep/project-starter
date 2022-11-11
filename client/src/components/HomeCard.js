import React from "react";
import { Link } from "react-router-dom";
import Map from "./Map";

function HomeCard({
  address,
  electric,
  gas,
  mortgage,
  rent,
  step,
  tenanted,
  water,
  id,
}) {
  const tempImgUrl =
    "https://streetviewpixels-pa.googleapis.com/v1/thumbnail?output=thumbnail&cb_client=maps_sv.tactile.gps&panoid=rpTI7Jo7WnpqqMkArgq5WQ&w=883&h=435&thumb=2&yaw=71.51634&pitch=0";

  return (
    <div className="col-10 col-md-8 col-lg-7">
      <div className="card mb-4 shadow">
        <div className="card-body card-text">
          <Map address={address}></Map>
        </div>

        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            Address: <Link to={"/posts/" + id}>{address}</Link>
          </li>

          <div className="container">
            <div className="row">
              <li className="list-group-item col-sm">rent: {rent}</li>
              <li className="list-group-item col-sm">mortgage: {mortgage}</li>
            </div>
          </div>
        </ul>

        <div className="card-footer small text-muted text-end">Other Info</div>
        {/* <div className="card-footer small text-muted text-end">{createdAt}</div> */}
      </div>
    </div>
  );
}

export default HomeCard;
