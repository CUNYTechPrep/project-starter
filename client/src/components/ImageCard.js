import React from 'react';
import sally from '../assets/images/japan.jpg';

function ImageCard(props) {
  // import photo from String(".." + props.coverPhoto);
  // console.log(photo)
  return (
    <div className="col-4">
        <img className="img-thumbnail img-responsive" src={props.src} alt="sally's icon"/>
    </div>
  );
}

export default ImageCard;