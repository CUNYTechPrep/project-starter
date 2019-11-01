import React from 'react';
import sally from '../assets/images/sally.png';

function ImageCard({props}) {
  console.log(props)
  return (
    <div className="col-4">
        <img className="img-thumbnail img-responsive" src={sally} alt="sally's icon"/>
    </div>
  );
}

export default ImageCard;