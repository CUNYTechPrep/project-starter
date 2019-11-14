import React from 'react';

function ImageCard(props) {
  // import photo from String(".." + props.coverPhoto);
  // console.log(photo)
  return (
    <div className="col-4">
    {console.log(props.src)}
        <img className="img-thumbnail img-responsive" src={props.src} alt="sally's icon"/>
    </div>
  );
}

export default ImageCard;