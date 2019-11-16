import React, { Component } from 'react';
import SideBar from '../components/navbar-component';
import TopBar from '../components/topbar-component';


export default class DashboardPage extends Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password: '' };
    }
  


    render() {
      return (
            <div>
                <SideBar/>          {/* This is the side bar navbar */}
                <TopBar/>           {/* This is the top bar navbar */}

            </div>
        );
    }
}


