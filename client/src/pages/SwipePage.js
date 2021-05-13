  
import React, { useRef } from 'react';
import 'w3-css/w3.css';
import '../styles.css';
import Profile from '../components/Profile/Profile';
import Loading from '../components/Loading';
import '../css/SwipePage.css';
import auth from '../services/auth.js';
import { useSwipeable } from 'react-swipeable';
//import Swipe from '../components/Swipe.js';


class SwipePage extends React.Component {
  state = {
    profiles: [],
    loading: true,
    pointerStart: 0,
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

  touchStart = (event) => {
    // this.setState({
    //   pointerStart: //something here that gets pointer x position
    // });
    console.log("down", event.clientX);

    this.setState({
      pointerStart: event.clientX
    });
  }

  touchEnd = (e) => {
    console.log("up", e.clientX);

    if(e.clientX > this.state.pointerStart + 100){
      console.log("SWIPED RIGHT");
    }
    else if(e.clientX < this.state.pointerStart - 100){
      console.log("SWIPED LEFT");
    }
    else {
      console.log("NO SWIPE!");
    }
  }

  render() {
    if(this.state.loading) //API info retrieval loading 
      return <Loading />

    let slides=[];

    for(let i=0; i < this.state.profiles.length; i+=1){
      if(this.state.profiles[i].props.id !== this.state.id){
        slides.push(this.state.profiles[i]);     
      }
    }
//maybe use carousel?

//when someone swipes, show the next thing in the array of the slides..
    return (
      <div>
        <div className="div-heading" style={{height: 500, width: 500}} onMouseDown={(e) => this.touchStart(e)} onMouseUp={(e) => this.touchEnd(e)}>
          {/* {slides} */}
          hi
        </div>
      </div>
    
    );
  }
}

export default SwipePage;

// src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAFXY2dx8oaeL9wTegcl2HMui-IIYYchJY&callback=initMap">
// send data to back end point 
// save their location upon the creation of their account since not all users are always online
// Ask users for their zipcode and then compare their zipcodes for area check
// compare against the user's last known location


//FOR SWIPER SLIDES
    //Fetch data from the api that has all the profiles
    // sends back an array and we do this forloop and we push the real data into
    //  these slides...
    // then we will see real profiles back and forth as we swipe.
    // anytime you want to get information with express we have to use FETCH, POST,GET...etc
    // We will use ANOTHER fetch call to know if the swipe was left or right.

