import React from 'react';
import Image from './Images/ConnectionImage.png';
import "./HomePage.css";

function AboutUsPage(props) {
  return (
    <div className="ui grid">
      <div className="eight wide column left-container"> 
      <div className="col1">
      <h1>Find students who share your situation</h1>
      <p>Get matched with students in your classes or connect with someone who might hold insight</p>
      </div>
      <button className="ui blue basic button">Sign Up</button>
     
      </div>
      <div className="eight wide column right-container"> 
        <img src={Image} style={{width: "80%"}} alt="Connection"/>
      </div>
    </div>
  );
}

export default AboutUsPage;