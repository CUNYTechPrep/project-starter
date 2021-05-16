import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import ProfilePic from '../img/profilepic.png';
import SwipeCard from '../img/Swipecard.png';
import ForumPic from '../img/Forumpage.png';

import auth from '../services/auth';
import '../css/aos.css';

const AuthHomeButton = withRouter(({ history }) => {
  console.log(auth.currentUser);
    if(!auth.isAuthenticated) {
        return (
          <div>
              <link rel="stylesheet" href="css/custom.css"></link>
              <link rel="stylesheet" href="css/bootstrap.min.css"></link>
              <link rel="stylesheet" href="font-awesome-4.7.0/css/font-awesome.min.css"></link>
                    
              <div class="jumbotron jumbotron-fluid"  
                  style={{backgroundImage: `url("https://media.istockphoto.com/photos/two-muscular-men-are-making-fist-bump-gesture-during-workout-in-the-picture-id1016623870?k=6&m=1016623870&s=612x612&w=0&h=uehhdt5CxUFM3TveOrHLompcIfn5NKovIsh7Rx5ZHhU=")`,
                          backgroundRepeat: "no-repeat", backgroundSize: "cover", imageResolution: "-moz-initial",
                          opacity: 0.9}}>
                  <div class="container text-center text-md-left">

                      <h1 class="display-3 text-white font-weight-bold my-5"
                        style={{WebkitTextStroke: "black", WebkitTextStrokeWidth: 1.5}}>
                        Welcome To Fitbud
                      </h1>
                      <p class="lead text-white my-4" style={{WebkitTextStroke: "white", WebkitTextStrokeWidth: 1.5}}>
                          Need a Gym Buddy? You came to the right place!
                      </p>
                  </div>
              </div>

              <div class="container ">
                  <br></br>
                  <div class="row justify-content-between text-center text-md-left">
                      <div class="col-md-6 flex-md-last">
                          <h2 class="font-weight-bold">First you can create your Profile Page!</h2>
                          <p class="my-4">
                              After you sign up you can go on the profile page and you can look at your profile but not only that, here is where you can change 
                              your FitLevel, Height & Weight, and your Bio
                          </p>
                          <Link to="./sign-up">
                            <button class="btn my-4 font-weight-bold"
                              style={{backgroundColor: 'blue', color: 'white', padding: 10, borderRadius: 10}}>
                            Sign Up!
                            </button>
                          </Link>
                      </div>
                      <div class="col-md-6 align-self-center flex-md-first"> 
                          <img style={{height: 400, width: 550, margin: 30}} 
                          src={ProfilePic} />
                      </div>
                  </div> 
              </div>

              <div class="jumbotron jumbotron-fluid feature">
                  <div class="container my-5">
                      <div class="row justify-content-between text-center text-md-left">
                          <div class="col-md-6">
                              <h2 class="font-weight-bold">Swipe To Find Your Next Gym Buddy </h2>
                              <p class="my-4">After creating a profile with Fitbud, you’ll be all set and ready to use our “Swipe” feature to find your
                                  next gym buddy or running partner. You can view their bio and other info such as height, weight and most importantly 
                                  their fitLevel, to find your ideal gym buddy. If you like the profile of the person, then you can swipe right or
                                  swipe left to find someone else..</p>
                              <a href="/swipe" class="btn my-4 font-weight-bold"
                                style={{backgroundColor: 'blue', color: 'white', padding: 10, borderRadius: 10}}>
                                  Swipe Now!
                              </a>
                          </div>
                          <div class="col-md-6 align-self-center">
                              <img style={{height: 500, width: 450}} src={SwipeCard} class="mx-auto d-block" />
                          </div>
                      </div>
                  </div>
              </div>

            <div class="jumbotron jumbotron-fluid feature" id="feature-last">
                <div class="container">
                    <div class="row justify-content-between text-center text-md-left">
                        <div class="col-md-6 flex-md-last">
                            <h2 class="font-weight-bold">Make Sure Check Out Our Forum Page!</h2>
                            <p class="my-4">
                                Because of how supportive and positive the fitness community can be, we want users to be able to use our “Forum” feature to read and contribute 
                            to threads which you and other Fitbud members can create anything from your own fitness experience, advice & tips, interesting articles or even just fun memes.
                            </p>
                            <a href="/forum" class="btn my-4 font-weight-bold"
                                style={{backgroundColor: 'blue', color: 'white', padding: 10, borderRadius: 10}}>Check it Out!</a>
                        </div>
                        <div class="col-md-6 align-self-center flex-md-first">
                            <img style={{height: 200, width: 550}} src= {ForumPic} class="mx-auto d-block" />
                        </div>
                    </div>
                </div>
            </div>
          </div>
        );
    }

    return (
      <div>
        <link rel="stylesheet" href="css/custom.css"></link>
        <link rel="stylesheet" href="css/bootstrap.min.css"></link>
        <link rel="stylesheet" href="font-awesome-4.7.0/css/font-awesome.min.css"></link>
                
        <div class="jumbotron jumbotron-fluid"  
              style={{backgroundImage: `url("https://media.istockphoto.com/photos/two-muscular-men-are-making-fist-bump-gesture-during-workout-in-the-picture-id1016623870?k=6&m=1016623870&s=612x612&w=0&h=uehhdt5CxUFM3TveOrHLompcIfn5NKovIsh7Rx5ZHhU=")`,
                      backgroundRepeat: "no-repeat", backgroundSize: "cover", imageResolution: "-moz-initial",
                      opacity: 0.9}}>
              <div class="container text-center text-md-left">

                  <h1 class="display-3 text-white font-weight-bold my-5" 
                    style={{WebkitTextStroke: "black", WebkitTextStrokeWidth: 1.5}}>
                    Welcome To Fitbud, {auth.currentUser.firstName}
                  </h1>
                  <p class="lead text-white my-4" style={{WebkitTextStroke: "white", WebkitTextStrokeWidth: 1.5}}>
                      Let's find you your next Gym Buddy Now!
                  </p>
              </div>
          </div>

          <div class="container ">
              <br></br>
              <div class="row justify-content-between text-center text-md-right">
              <div class="col-md-6 align-self-center flex-md-first"> 
                      <img style={{height: 400, width: 550, margin: 30}} 
                      src={ProfilePic} />
                  </div>
                  <div class="col-md-6 flex-md-last">
                      <h2 class="font-weight-bold">Check out your Profile Farhene!</h2>
                      <p class="my-4">
                          You can now go to the profile page to look at your profile but not only that, here is where you can now change 
                          your FitLevel, Height & Weight, and your Bio.
                      </p>
                  </div>
              </div> 
          </div>

          <div class="jumbotron jumbotron-fluid feature">
              <div class="container my-5">
                  <div class="row justify-content-between text-center text-md-left">
                      <div class="col-md-6">
                          <h2 class="font-weight-bold">Swipe To Find Your Next Gym Buddy </h2>
                          <p class="my-4">After creating a profile with Fitbud, you’ll be all set and ready to use our “Swipe” feature to find your
                              next gym buddy or running partner. You can view their bio and other info such as height, weight and most importantly 
                              their fitLevel, to find your ideal gym buddy. If you like the profile of the person, then you can swipe right or
                              swipe left to find someone else..</p>
                          <a href="/swipe" class="btn my-4 font-weight-bold"
                            style={{backgroundColor: 'blue', color: 'white', padding: 10, borderRadius: 10}}>
                              Swipe Now!
                          </a>
                      </div>
                      <div class="col-md-6 align-self-center">
                          <img style={{height: 500, width: 450}} src={SwipeCard} class="mx-auto d-block" />
                      </div>
                  </div>
              </div>
          </div>

        <div class="jumbotron jumbotron-fluid feature" id="feature-last">
            <div class="container">
                <div class="row justify-content-between text-center text-md-right">
                    <div class="col-md-6 align-self-center flex-md-first">
                        <img style={{height: 200, width: 550}} src= {ForumPic} class="mx-auto d-block" />
                    </div>
                    <div class="col-md-6 flex-md-last">
                        <h2 class="font-weight-bold">Make Sure Check Out Our Forum Page!</h2>
                        <p class="my-4">
                            Because of how supportive and positive the fitness community can be, we want users to be able to use our “Forum” feature to read and contribute 
                        to threads which you and other Fitbud members can create anything from your own fitness experience, advice & tips, interesting articles or even just fun memes.
                        </p>
                        <a href="/forum" class="btn my-4 font-weight-bold"
                            style={{backgroundColor: 'blue', color: 'white', padding: 10, borderRadius: 10}}>Check it Out!</a>
                    </div> 
                </div>
            </div>
        </div>
      </div>
    );
});
export default AuthHomeButton;