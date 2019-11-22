import React, { Component } from 'react';
import SideBar from '../components/sidebar-component';
import TopBar from '../components/topbar-component';
import Cards from '../components/card-component';
import TableLight from '../components/table-light-component';
import TableDark from '../components/table-dark-component';


export default class DashboardPage extends Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password: '' };
    }
  


    render() {
      return (
            <div>
                <SideBar/>          {/* This is the side bar navbar component */}
                <TopBar/>           {/* This is the top bar navbar component it also contains the modal-component*/}
                <Cards />           {/* This is the Cards component */}
                <TableLight />      {/* This is the table light component */}
                <TableDark />       {/* This is the table dark component */}    
                
            </div>
        );
    }
}


