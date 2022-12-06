import React from "react";
import { Link } from "react-router-dom";
import DeleteCategory from "./DeleteCategory";
import{FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import{faPlus, faTimes} from '@fortawesome/free-solid-svg-icons'


function MicroPostCard({ content, createdAt, id }) {
  return (
    <div className="col-10 col-md-8 col-lg-7">
      <div className="d-flex flex-row justify-content-around card" style={{"width":"450px"}}>
      <div>
      <Link to={"/posts/" + id}>
          <FontAwesomeIcon
            icon={faPlus}
            style={{"color":"purple"}}
            type="button"
            />
      </Link>
      </div>
        <div className="d-flex flex-row justify-content-around card-body align-text-center" style={{"width":"100px"}}>
          <div>{content}</div>
        </div>
        <DeleteCategory id={id}/>
      </div>
    </div>
  );
}

export default MicroPostCard;
