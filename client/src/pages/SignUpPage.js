import React from 'react';

import logo from '../img/dumbbell.png';
import '../App.css';

function SignUpPage(props) {
  return (
    <div>
      <div className="div-heading">
        <img className="logo" alt="dumbell-logo" src={logo} />
        <h1>Sign Up for Fitbud!</h1>
      </div>

      <div className="div-background">
        <form>
          <input type="text" placeholder="Username"></input>
          <br></br>
          <br></br>
          <input type="text" placeholder="Password"></input>
          <br></br>
          <br></br>
          <button className="button-signup-only" type="button">
            Sign Up
          </button>
        </form>
      </div>
      <div style={{ color: 'gray', paddingTop: 20 }}>OR</div>
      <div style={{ paddingTop: 20}}>
        <button
          style={{ backgroundColor: 'lightgray', borderRadius: 5
          , marginBottom: 40  }}
          type="submit"
        >
          Sign Up with <span className="blue">G</span>
          <span className="red">o</span>
          <span className="yellow">o</span>
          <span className="blue">g</span>
          <span className="green">l</span>
          <span className="red">e</span>
        </button>
      </div>
      <div style={{float: "right", color: "#979797",
        marginBottom: 10}}>
        @Fitbud
      </div>
    </div>
  );
}

export default SignUpPage;
