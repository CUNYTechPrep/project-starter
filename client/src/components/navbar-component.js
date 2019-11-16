import React from 'react';
import '../css/dashboard-style.css';
import '../css/style.css';

import Profile_Image from '../images/profile-photo.jpg';


function Navigation(props) {
    return (
        <div>
            <nav class="navbar navbar-expand-md navbar-light">
                <button class="navbar-toggler ml-auto mb-2 bg-light" type="button" data-toggle="collapse" data-target="#myNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="myNavbar">

                    <div class="container-fluid">   {/* <!-- Container Grid --> */}
                        <div class="row">           {/* <!-- Row 1 --> */}
                            {/* <!-- start of sidebar --> */}
                            <div class="col-xl-2 col-lg-3 col-md-4 sidebar fixed-top">      {/* <!-- [Row 1, Column 1] -- Left Column, for side bar --> */}
                                
                                {/* <!-- Profile Photo --> */}
                                <a href="#" class="navbar-brand text-white d-block mx-auto text-center py-3 mb-4 bottom-border">Perfect Pantry</a>
                                <div class="bottom-border pb-3">
                                    <img width="80" height="60" class="rounded-circle mr-3" src={Profile_Image} />
                                    <a href="#" class="text-white">Todd Howard</a>
                                </div>

                                {/* <!--Start of Unordered List --> */}
                                <ul class="navbar-nav flex-column mt-4">  
                                    {/* <!-- Pantry --> */}
                                    <li class="nav-item">
                                        <a href="#" class="nav-link text-white p-3 mb-2 current">       {/* <!-- Can't use active as it conflicts with existing Bootstrap class --> */}
                                            <i class="fas fa-home text-light fa-lg mr-3"/>
                                            Pantry
                                        </a>
                                    </li>
                                    {/* <!-- Saved Recipes --> */}
                                    <li class="nav-item">
                                        <a href="#" class="nav-link text-white p-3 mb-2 sidebar-link">
                                            <i class="fas fa-user text-light fa-lg mr-3"/>
                                            Saved Recipes
                                        </a>
                                    </li>
                                    {/* <!-- Suggested Recipes --> */}
                                    <li class="nav-item">
                                        <a href="#" class="nav-link text-white p-3 mb-2 sidebar-link">
                                            <i class="fas fa-envelope text-light fa-lg mr-3"/>
                                            Suggested Recipes
                                        </a>
                                    </li>
                                    {/* <!-- Settings --> */}
                                    <li class="nav-item">
                                        <a href="#" class="nav-link text-white p-3 mb-2 sidebar-link">
                                            <i class="fas fa-wrench text-light fa-lg mr-3"/>
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