import React from 'react';

function Navigation(props) {
    return (
        <nav class="navbar navbar-expand-md navbar-light"/>
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
                            <img src="./images/profile-photo.jpg" alt="Todd Howard" width="50" class="rounded-circle mr-3"/>
                            <a href="#" class="text-white">Todd Howard</a>
                        </div>

                        {/* <!--Start of Unordered List --> */}
                        <ul class="navbar-nav flex-column mt-4">  
                            {/* <!-- Dashboard --> */}
                            <li class="nav-item">
                                <a href="#" class="nav-link text-white p-3 mb-2 current">       {/* <!-- Can't use active as it conflicts with existing Bootstrap class --> */}
                                    <i class="fas fa-home text-light fa-lg mr-3"></i>
                                    Dashboard
                                </a>
                            </li>
                            {/* <!-- Profile --> */}
                            <li class="nav-item">
                                <a href="#" class="nav-link text-white p-3 mb-2 sidebar-link">
                                    <i class="fas fa-user text-light fa-lg mr-3"></i>
                                    Profile
                                </a>
                            </li>
                            {/* <!-- Saved Recipes --> */}
                            <li class="nav-item">
                                <a href="#" class="nav-link text-white p-3 mb-2 sidebar-link">
                                    <i class="fas fa-envelope text-light fa-lg mr-3"></i>
                                    Saved Recipes
                                </a>
                            </li>
                            {/* <!-- Sales --> */}
                            <li class="nav-item">
                                <a href="#" class="nav-link text-white p-3 mb-2 sidebar-link">
                                    <i class="fas fa-shopping-cart text-light fa-lg mr-3"></i>
                                    Sales
                                </a>
                            </li>
                            {/* <!-- Analytics --> */}
                            <li class="nav-item">
                                <a href="#" class="nav-link text-white p-3 mb-2 sidebar-link">
                                    <i class="fas fa-chart-line text-light fa-lg mr-3"></i>
                                    Analytics
                                </a>
                            </li>
                            {/* <!-- Charts --> */}
                            <li class="nav-item">
                                <a href="#" class="nav-link text-white p-3 mb-2 sidebar-link">
                                    <i class="fas fa-chart-bar text-light fa-lg mr-3"></i>
                                    Charts
                                </a>
                            </li>
                            {/* <!-- Tables --> */}
                            <li class="nav-item">
                                <a href="#" class="nav-link text-white p-3 mb-2 sidebar-link">
                                    <i class="fas fa-table text-light fa-lg mr-3"></i>
                                    Tables
                                </a>
                            </li>
                            {/* <!-- Settings --> */}
                            <li class="nav-item">
                                <a href="#" class="nav-link text-white p-3 mb-2 sidebar-link">
                                    <i class="fas fa-wrench text-light fa-lg mr-3"></i>
                                    Settings
                                </a>
                            </li>
                            {/* <!-- Documentation --> */}
                            <li class="nav-item">
                                <a href="#" class="nav-link text-white p-3 mb-2 sidebar-link">
                                    <i class="fas fa-file-alt text-light fa-lg mr-3"></i>
                                    Documentation
                                </a>
                            </li>
                            {/* <!-- Report Bugs --> */}
                            <li class="nav-item">
                                <a href="#" class="nav-link text-white p-3 mb-2 sidebar-link">
                                    <i class="fas fa-bug text-light fa-lg mr-3"></i>
                                    Report Bugs
                                </a>
                            </li>
                            {/* <!-- About Us --> */}
                            <li class="nav-item">
                                <a href="#" class="nav-link text-white p-3 mb-2 sidebar-link">
                                    <i class="fas fa-address-card text-light fa-lg mr-3"></i>
                                    About Us
                                </a>
                            </li>
                            {/* <!-- Nothing to see here --> */}
                        </ul> {/* <!-- end of Unordered List --> */}
                    </div>
                    {/* <!-- -end of sidebar --> */}

                    {/* <!-- start of top-nav --> */}
                    <div class="col-xl-10 col-lg-9 col-md-8 ml-auto bg-dark fixed-top py-2 top-navbar"> {/* <!-- [Row 1, Column 2] This is the top nav -->*/ }
                        <div class="row align-items-center">
                            {/* <!-- Description --> */}
                            <div class="col-md-4">
                                <h4 class="text-light text-uppercase mb-0">Dashboard</h4>
                            </div>
                            {/* <!-- Search bar --> */}
                            <div class="col-md-5">
                                <form>
                                    <div class="input-group">
                                        <input type="text" class="form-control search-input text-light" placeholder=" Search "/>
                                        <button type="button" class="btn btn-light search-button"><i class="fas fa-search text-danger"/></button>
                                    </div>
                                </form>
                            </div>
                            {/* <!-- Icons: Comment, Bell, Sign-Out --> */} 
                            <div class="col-md-3">
                                <ul class="navbar-nav">
                                    <li class="nav-item icon-parent"><a href="#" class="nav-link icon-bullet"><i class="fas fa-comments text-muted fa-lg"/></a></li>
                                    <li class="nav-item icon-parent"><a href="#" class="nav-link icon-bullet"><i class="fas fa-bell text-muted fa-lg"/></a></li>
                                    <li class="nav-item ml-md-auto"><a href="#" class="nav-link" data-toggle="modal" data-target="#sign-out" ><i class="fas fa-sign-out-alt text-danger fa-lg"/></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    { /* end of top-nav */}
                </div>
            </div>
        </div>
    </nav>
    </div>
    );
  }

export default Navigation;