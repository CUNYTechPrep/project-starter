import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import SideBar from '../components/sidebar-component';
import TopBar from '../components/topbar-component';
import Loading from '../components/Loading';
import '../css/saved.css';

import CTP_Logo from '../images/CTP_Logo.png';
import Steven from '../images/Steven.jpg';
import Gen from '../images/Gen.jpg'
import Jorge from '../images/Jorge.jpg';
import Ray from '../images/Ray.jpg';


export default class aboutUsPage extends Component {
      
  state = {
      Loggedin: true,
      loading: false,  
      goBack: false, 
  }

  

  render() {
      
      if(this.state.loading) return <Loading />;
      if(this.state.Loggedin === false) return <Redirect to="/login" />  // Safety Pre-Caution against hackers! ;)
      if(this.state.goBack) return <Redirect to="/dashboard" />

      return (
          <div>
           
              <SideBar/>              {/* This is the side bar navbar component */}                     
              <TopBar />              {/* This is the top bar component */}
              
              <div className="col-xl-10 col-lg-9 col-md-8 ml-auto py-2 mt-5 shadow-lg">
                  <h1>CTP 2019</h1>
                  <img src={CTP_Logo} alt="CTP Logo"></img>
                  <div  className="mt-5">
                    <h2>Team Star Platinum Members</h2>
                    <p>Our goal was to create a virtual pantry that would help prevent food from going to waste, and encourage cullinary exploration!</p>
                  </div>
              </div>

              <div className="col-xl-10 col-lg-9 col-md-8 ml-auto py-2 mt-5 shadow-lg">
                <img src={Ray} alt="Rehman M Arshad, you can just call me Ray!"></img>
                <div className="mt-5">
                  <h4>Handled the Front-End using React, and collaborated with team members using slack and trello.</h4>
                </div>
              </div>

              <div className="col-xl-10 col-lg-9 col-md-8 ml-auto py-2 mt-5 shadow-lg">
                <img src={Steven} alt="Steven Santana"></img>
                <div className="mt-5">
                  <h4>Handled Authentication, API Routing on the backend, minor input and advice for front end and database.</h4>
                </div>
              </div>

              <div className="col-xl-10 col-lg-9 col-md-8 ml-auto py-2 mt-5 shadow-lg">
                <img width="520" height="700" src={Gen} alt="Gen Li"></img>
                <div className="mt-5">
                  <h4>Handled the PostgreSQL backend Database.</h4>
                </div>
              </div>

              <div className="col-xl-10 col-lg-9 col-md-8 ml-auto py-2 mt-5 shadow-lg">
                <img src={Jorge} alt="Jorge Quiroz"></img>
                <div className="mt-5">
                  <h4>Utilized the Recipe api, and integrated it into the Front-End.</h4>
                </div>
              </div>

              <div className="col-xl-10 col-lg-9 col-md-8 ml-auto py-2 mt-5 shadow-lg">
                <h3>The Secret to Good things lie in Team Work</h3>
              </div>
                              
              <div className="col-xl-10 col-lg-9 col-md-8 ml-auto py-2 mt-5">
                  <p>Team Star Platinum © 2019</p>
              </div>

          </div>
      );
  }
}


