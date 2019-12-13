import React from 'react';

import { Link } from 'react-router-dom'; 

import '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-free';
import '@fortawesome/fontawesome-svg-core';
import '@fortawesome/free-brands-svg-icons';
import '@fortawesome/free-solid-svg-icons';


import '../css/dashboard-style.css';
import '../css/style.css';

import Profile_Image from '../images/profile-photo.jpg';


function Navigation(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-light">
                <button className="navbar-toggler ml-auto mb-2 bg-light" type="button" data-toggle="collapse" data-target="#myNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="myNavbar">

                    <div className="container-fluid">   {/* <!-- Container Grid --> */}
                        <div className="row">           {/* <!-- Row 1 --> */}
                            {/* <!-- start of sidebar --> */}
                            <div className="col-xl-2 col-lg-3 col-md-4 sidebar fixed-top">      {/* <!-- [Row 1, Column 1] -- Left Column, for side bar --> */}
                                
                                {/* <!-- Profile Photo --> */}
                                <a href="/dashboard" className="navbar-brand text-white d-block mx-auto text-center py-3 mb-4 bottom-border">Perfect Pantry</a>
                                <div className="bottom-border pb-3">
                                    <img width="80" height="60" className="rounded-circle mr-3" src={Profile_Image} alt="profile"/>
                                    <a href="/settings" className="text-white">Todd Howard</a>
                                </div>

                                {/* <!--Start of Unordered List --> */}
                                <ul className="navbar-nav flex-column mt-4">  
                                    {/* <!-- Pantry --> */}
                                    <li className="nav-item">
                                        <Link to="/dashboard" className="nav-link text-white p-3 mb-2 sidebar-link">       {/* <!-- Can't use active as it conflicts with existing Bootstrap className --> */}
                                            <i className="fas fa-home text-light fa-lg mr-3"/>
                                            Pantry
                                        </Link>
                                    </li>
                                    {/* <!-- Saved Recipes --> */}
                                    <li className="nav-item">
                                        <Link to="/saved" className="nav-link text-white p-3 mb-2 sidebar-link">
                                            <i className="fas fa-user text-light fa-lg mr-3"/>
                                            Saved Recipes
                                        </Link>
                                    </li>
                                    {/* <!-- Suggested Recipes --> */}
                                    <li className="nav-item">
                                        <Link to="/recipes" className="nav-link text-white p-3 mb-2 sidebar-link">
                                            <i className="fas fa-user text-light fa-lg mr-3"/>
                                            Suggested Recipes
                                        </Link>
                                    </li>
                                    {/* <!-- Celebrate the Holidays --> */}
                                    <li className="nav-item">
                                        <Link to="/holiday" className="nav-link text-white p-3 mb-2 sidebar-link">
                                            <i className="fas fa-user text-light fa-lg mr-3"/>
                                            Celebrate
                                        </Link>
                                    </li>
                                    {/* <!-- Settings --> */}
                                    <li className="nav-item">
                                        <Link to="/settings" className="nav-link text-white p-3 mb-2 sidebar-link">
                                            <i className="fas fa-wrench text-light fa-lg mr-3"/>
                                            Settings
                                        </Link>
                                    </li>

                                </ul> {/* <!-- end of Unordered List --> */}
                            </div>
                            {/* <!-- end of sidebar --> */}
                            
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
  }

export default Navigation;