import React from 'react';
import HandleSignOutModal from '../components/modal-component';
import '../css/dashboard-style.css';
import '../css/style.css';


function TopBar (props) {
    return (
        <div>
            {/* <!-- start of top-nav --> */}
            <div className="col-xl-10 col-lg-9 col-md-8 ml-auto bg-dark fixed-top py-2 top-navbar"> {/* <!-- [Row 1, Column 2] This is the top nav --> */}
                <div className="row align-items-center">
                    {/* <!-- Description --> */}
                    <div className="col-md-4">
                        <h4 className="text-light text-uppercase mb-0">Pantry</h4>
                    </div>
                    {/* <!-- Search bar --> */}
                    <div className="col-md-5">
                        <form>
                            <div className="input-group">
                                <input type="text" className="form-control search-input text-light" placeholder=" Search "/>
                                <button type="button" className="btn btn-light search-button"><i className="fas fa-search text-danger"/></button>
                            </div>
                        </form>
                    </div>
                    {/* <!-- Icons: Comment, Bell, Sign-Out --> */} 
                    <div className="col-md-3">
                        <ul className="navbar-nav">
                            
                            <li className="nav-item ml-md-auto"><a><HandleSignOutModal/></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <!-- end of top-nav --> */}
        </div>
    );
  }

export default TopBar;