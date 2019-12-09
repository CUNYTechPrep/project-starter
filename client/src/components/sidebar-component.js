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
                                <a href="#" className="navbar-brand text-white d-block mx-auto text-center py-3 mb-4 bottom-border">Perfect Pantry</a>
                                <div className="bottom-border pb-3">
                                    <img width="80" height="60" className="rounded-circle mr-3" src={Profile_Image} />
                                    <a href="#" className="text-white">Todd Howard</a>
                                </div>

                                {/* <!--Start of Unordered List --> */}
                                <ul className="navbar-nav flex-column mt-4">  
                                    {/* <!-- Pantry --> */}
                                    <li className="nav-item">
                                        <a href="#" className="nav-link text-white p-3 mb-2 current">       {/* <!-- Can't use active as it conflicts with existing Bootstrap className --> */}
                                            <i className="fas fa-home text-light fa-lg mr-3"/>
                                            Pantry
                                        </a>
                                    </li>
                                    {/* <!-- Saved Recipes --> */}
                                    <li className="nav-item">
                                        <Link href="/saved" className="nav-link text-white p-3 mb-2 sidebar-link">
                                            <i className="fas fa-user text-light fa-lg mr-3"/>
                                            Saved Recipes
                                        </Link>
                                    </li>
                                    {/* <!-- Suggested Recipes --> */}
                                    <li className="nav-item">
                                        <Link href="/recipes" className="nav-link text-white p-3 mb-2 sidebar-link">
                                            <i className="fas fa-user text-light fa-lg mr-3"/>
                                            Suggested Recipes
                                        </Link>
                                    </li>
                                    {/* <!-- Settings --> */}
                                    <li className="nav-item">
                                        <a href="/settings" className="nav-link text-white p-3 mb-2 sidebar-link">
                                            <i className="fas fa-wrench text-light fa-lg mr-3"/>
                                            Settings
                                        </a>
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