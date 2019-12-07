import React, { 
    Component, 
    Link,
} from 'react';

import { Redirect } from 'react-router-dom';
import SideBar from '../components/sidebar-component';
import Loading from '../components/Loading';


export default class savedPage extends Component {
    

    render() {
        
        if(this.state.Loggedin === false) return <Redirect to="/login" />  // Safety Pre-Caution against hackers! ;)

        return (
            <div>
                <SideBar/>              {/* This is the side bar navbar component */}   
                <h1>Comming Soon</h1>
            </div>
        );
    }
}


