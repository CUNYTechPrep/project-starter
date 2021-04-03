import React from 'react';
import logo from '../img/dumbbell.png';
import Clipboard from "clipboard";
const clip =new Clipboard(".btn");

function ContactUsPage(props) {
  var clip = new Clipboard('.btn');
  return (
      <div className="div-heading">
            <img className="logo" src={logo}/>
            <h1>Contact Us!</h1>
            <h5 style={{fontSize: 14, color: 'gray'}}>Please Click on Our Email Below to copy to clipboard!</h5>
            <button class="btn" data-clipboard-text="fitbudteam@gmail.com"  >
                fitbudteam@gmail.com
            </button>
      </div>
    
    
  );
}

export default ContactUsPage;