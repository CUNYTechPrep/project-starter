  
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
    if(this.state.loading) //API info retrieval loading 
      return <Loading />

      let slides =[];
     

      for(let i = 0; i < this.state.profiles.length; i+=1){
        if(auth.currentUser.id !== this.state.profiles[i].props.id){
          slides.push(
            this.state.profiles[i]
          );
        }
      }
      
      return (
        <div >
          <Simple db={slides} />
        </div>
      );   
      //this part will allow us to send data to our cards and populate them
  }

}


  export default SwipePage1;



  