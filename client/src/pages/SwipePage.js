  
import React, { useState } from 'react'
import 'w3-css/w3.css';
import '../styles.css';
import Profile from '../components/Profile/Profile';
import Loading from '../components/Loading';
import '../css/SwipePage.css';
import auth from '../services/auth.js';
import TinderCard from 'react-tinder-card';
import Simple from './slides';
// import Switch from 'react-ios-switch';

class SwipePage1 extends React.Component {
  state = {
    profiles: [],
    loading: true,
    pointerStart: 0,
    db: [
      {
        name: 'Richard Hendricks',
        url: './img/richard.jpg'
      },
      {
        name: 'Erlich Bachman',
        url: './img/erlich.jpg'
      },
      {
        name: 'Monica Hall',
        url: './img/monica.jpg'
      },
      {
        name: 'Jared Dunn',
        url: './img/jared.jpg'
      },
      {
        name: 'Dinesh Chugtai',
        url: './img/dinesh.jpg'
      }
    ]
    
  }

  componentDidMount() {
    fetch("/api/users")
    .then(res => res.json())
    .then(profiles => {
      this.setState({
        id: auth.currentUser.id,
        loading: false,
        profiles: profiles.map((p, ii) => 
            <Profile {...p} key={ii} />
          ),
      });
    })
    .catch(err => console.log("API ERROR: ", err));
  }

  

render(){
  
    return (<Simple db={this.state.db} />);   ///this part will allow us to send data to our cards and populate them
  
}

}


  export default SwipePage1;
