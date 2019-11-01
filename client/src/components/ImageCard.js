import React from 'react';
import sally from '../assets/images/sally.png';
import { Link } from 'react-router-dom';

function ImageCard(props) {
  return (
    <div className="col-4">
        <img className="img-thumbnail img-responsive" src={sally} alt="sally's icon"/>
    </div>

  );
}

export default ImageCard;