import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import SideBar from '../components/sidebar-component';
import TopBar from '../components/topbar-component';
import Loading from '../components/Loading';
import '../css/saved.css';




export default class Landing extends Component {
      
  state = {
 
  }

  

  render() {
      

      return (
          <div className="container">
              <div className="row">
              <div className="col s12 center-align">
                        <div className="col s6">
                                      <Link
                                      to="/signup"
                                      style={{
                                        width: "140px",
                                        borderRadius: "3px",
                                        letterSpacing: "1.5px"
                                      }}
                                      className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                                    >
                                      Signup
                                    </Link>
                        </div>
                        <div className="col s6">
                            <Link
                                to="/login"
                                style={{
                                    width: "140px",
                                    borderRadius: "3px",
                                    letterSpacing: "1.5px"
                                }}
                                className="btn btn-large btn-flat waves-effect white black-text">
                                    Login
                                </Link>
                        </div>
                    </div>
              </div>
           
     

          </div>
      );
  }
}


