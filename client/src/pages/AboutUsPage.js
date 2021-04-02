import React from 'react';
import logo from '../img/dumbbell.png';
import Clipboard from "clipboard";
const clip =new Clipboard(".btn");

function AboutUsPage(props) {
  var clip = new Clipboard('.btn');
  return (
      <div className="div-heading">
            <img className="logo" src={logo}/>
            <h1>Contact Us!</h1>
            <button class="btn" data-clipboard-text="fitbudteam@gmail.com"  >
            fitbudteam@gmail.com
            </button>
      </div>
    
    
  );
}

export default AboutUsPage;