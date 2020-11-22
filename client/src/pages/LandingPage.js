import React from 'react';
import {Link} from 'react-router-dom';
import Image from './Images/connection.svg';
import "./LandingPage.css";

function LandingPage(props) {
  return (
    <div className="ui grid">
      <div className="eight wide column left-container"> 
      <div className="col1">
        <h1 className="title">Find students who share your situation</h1>
        <p>Get matched with students in your classes or connect with someone who might hold insight</p>
        <Link to="/signup">
        <button className="ui blue basic button">Sign Up</button>
        </Link>
      </div>
      </div>
      <div className="eight wide column right-container"> 
        <div className="col2">
      
        <img src={Image} style={{width: "80%"}} alt="Connection"/>
      
        </div>
      </div>
    </div>
  );
}

export default LandingPage;