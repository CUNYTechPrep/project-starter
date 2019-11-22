import React, { Component } from 'react';
import SideBar from '../components/sidebar-component';
import TopBar from '../components/topbar-component';
import HandleSignOutModal from '../components/modal-component';

import '../css/dashboard-style.css';
import '../css/style.css';







export default class DashboardPage extends Component {
    constructor(props) {
        super(props);

        


        this.state = { 
            email: "",
            password: "",  
        };
         
    }
  




    render() {
      return (
            <div>
            
              
              <HandleSignOutModal />
              

            </div>
        );
    }
}


