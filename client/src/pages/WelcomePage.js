import React from 'react';
import '../App.css';
import '../Welcomepage.css';
import 'w3-css/w3.css';

function WelcomePage(props) {
  return (
<div className="bgimg w3-display-container w3-animate-opacity w3-text-white">
    <div className="w3-display-middle">
        <h1 class="welcometitle" className="w3-jumbo w3-animate-top">Welcome to fitbud!</h1>
        <h2 class="welcometitles">Need a Gym Buddy? You came to the right place!</h2>
        <br></br>        
        
        <button  className="w3-large w3-center button" >Sign up now!</button>
    </div>
    <div className="w3-display-bottomleft w3-padding-large"></div>
</div>
    
    
  );
}

export default WelcomePage;