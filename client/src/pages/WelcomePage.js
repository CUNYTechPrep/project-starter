import React from 'react';
import '../App.css';
import '../css/Welcomepage.css';
import 'w3-css/w3.css';
import { Link } from 'react-router-dom';

function WelcomePage(props) {
  return (
<div className="bgimg w3-display-container w3-animate-opacity w3-text-white">
    <div className="w3-display-middle">
        <h1 class="welcometitle" className="w3-jumbo w3-animate-top" style={{backgroundColor: "rgba(0, 0, 0, 0.4)"}}>
          Welcome to fitbud!
        </h1>
        
        <h2 class="welcometitles" style={{backgroundColor: "rgba(0, 0, 0, 0.4)"}}>
          Need a Gym Buddy? You came to the right place!
        </h2>
        <br></br>        
        
        <Link to="./sign-up">
            <button className="w3-large w3-center button" type="button">
              Sign Up Now!
            </button>
        </Link>
    </div>
    <div className="w3-display-bottomleft w3-padding-large"></div>
</div>
    
  );
}

export default WelcomePage;