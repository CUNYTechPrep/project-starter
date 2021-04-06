import React from 'react';

function PostUserInfo(props) {
  return (
    <div className="user-info-container">
      <h6> John Cena </h6>
      <img
        alt="John Cena"
        src="https://resizing.flixster.com/IpEFWZUF1Cd_NZPC5gCEVhcJd-M=/506x652/v2/https://flxt.tmsimg.com/v9/AllPhotos/487578/487578_v9_ba.jpg"
        width="90px"
        height="90px"
      ></img>
      <p>Height: 6'1 </p>
      <p>Weight:251 lbs</p>
      <p>Bud rep: 1,462 nugs</p>
    </div>
  );
}

export default PostUserInfo;
