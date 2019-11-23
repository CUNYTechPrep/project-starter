import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import SideBar from '../components/sidebar-component';
import TopBar from '../components/topbar-component';
import Cards from '../components/card-component';
import TableLight from '../components/table-light-component';
import TableDark from '../components/table-dark-component';


export default class DashboardPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            Loggedin: true, 
            AuthToken: "Authentication Token",
            username: "",
        };
    }

    // Get Token from database store it here, if the user is logged in for too long, 
    // Reset the Authentication Token on the back end 
    // If the old token doesn't match with the new one (which it shouldn't) 
    // Then redirect to sign in page


    render() {

        if(this.state.Loggedin === false) return <Redirect to="/login" />


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


