import React, { Component } from 'react';
import Navigation from '../components/navbar-component';

export default class DashboardPage extends Component {
    constructor(props) {
        super(props);
        this.state = { email: '', password: '' };
    }
  


    render() {
      return (
            <div>
                <Navigation/>       {/* This is the side bar navbar */}
             </div>
        );
    }
}


