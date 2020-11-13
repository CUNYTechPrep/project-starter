import React from 'react';
import Image from './Images/ConnectionImage.png';

function AboutUsPage(props) {
  return (
    <div className="ui grid">
      <div className="eight wide column"> Hello</div>
      <div className="eight wide column"> 
        <img src={Image} style={{width: "70%"}} />
      </div>
    </div>
  );
}

export default AboutUsPage;