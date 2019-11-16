import React from 'react';
import '../css/dashboard-style.css';
import '../css/style.css';



function Log_Out_Modal (props) {
    return (
        <div>
            {/* <!-- start of top-nav --> */}
            <div class="col-xl-10 col-lg-9 col-md-8 ml-auto bg-dark fixed-top py-2 top-navbar"> {/* <!-- [Row 1, Column 2] This is the top nav --> */}
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
            {/* <!-- end of top-nav --> */}
        </div>
    );
  }

export default Log_Out_Modal;