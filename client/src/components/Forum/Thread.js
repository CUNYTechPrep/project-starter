import React from 'react-dom';
import ThreadPost from './ThreadPost';
import '../../css/Thread.css';
import auth from '../../services/auth';
import { Link } from 'react-router-dom';

//Here we want to map out all the posts here from threadPosts table

// class Thread extends React.Component {
  function Thread({forumThread}) {
  //here I want to pass in the forum's primary key which is its id.
  // with that id I can get it to be the forumId value in ThreadPosts model

      return (
        <div>
          <h6 className="thread-heading">
            <b>Thread: </b>
            <text className="thread-topic">
              Best ways to cut while bulking? 
              {/* {forumThread.props.threadTitle} */}
              {/* Here above we want to have gotten threadTitle from 
                Forum table here, shown above */}
            </text>
          </h6>
          <div>
              {
              auth.isAuthenticated
              ? 
                <div>
                  <Link to="/add-thread-post"className="post-button btn my-10 font-weight-bold"> 
                    Add a Post 
                  </Link>
                </div>
              : 
                <Link to="/sign-in" className="post-login-button btn my-10 font-weight-bold"> 
                  Login to Post In This Thread
                </Link>
              }        
          </div>

                <ThreadPost />


        {/* <div> */}
          {/* Here is where in a loop or mapping we would map all posts connected to the FORUM ID */}
          {/* {forumThread.map((ft) => 
            <div>
              <h6 className="thread-heading">
                <b>Thread: </b>
                <text className="thread-topic">
                  Best ways to cut while bulking? 
                  {/* {ft.props.threadTitle} */}
                  {/* Here above we want to have gotten threadTitle from 
                    Forum table here, shown above */}
                {/* </text>
              </h6> */}
              
              {/* POSTS LIST BEGINS HERE */}
              {/* <div>
                <p className="post-date">Posted on: 
                    {ft.props.createdAt} 
                02-13-2021 9:20am</p>
                <article className="each-post">
                  <div>
                    <div className="user-info-container">
                      <h6> John Cena </h6>
                      <img
                        className="user-pp"
                        alt="John Cena"
                        src="https://resizing.flixster.com/IpEFWZUF1Cd_NZPC5gCEVhcJd-M=/506x652/v2/https://flxt.tmsimg.com/v9/AllPhotos/487578/487578_v9_ba.jpg"
                        width="90px"
                        height="90px"
                      ></img>
                      <p>Height: 6'1 </p>
                      <p>Weight:251 lbs</p>
                      <p>Bud rep: 1,462 nugs</p>
                    </div>
                    <div>
                      <p>
                        <b>
                          {title}
                          Best ways to Bulk while cutting?</b>
                        <br></br>
                        <br></br>
                        {content}
                        Hola Buddies! As you are all probably aware, summer is coming and you
                        know what they say ..."Suns out, tums out!", or rather, that's what I
                        usually say. My goal is to change "tums" into "guns" and to do that I
                        need to lose fat while simultaneously building muscle, all before June
                        comes around. Does anyone have experience attempting and succeeding or
                        failing and wouldn't mind sharing what they learned, or if it's just an
                        unachievable dream you can say that too :/ Thanks! <br></br> P.S. Let me
                        know if you can't see my profile picture
                      </p>
                      <p className="post-last-edited-date">
                        <i>Last edited on: 
                          {updatedAt}
                          02-13-2021 9:20am</i>
                      </p>
                    </div>
                  </div>
                </article>
              </div> 




            </div>
          )} */}
        </div>
      );
  // }
}

export default Thread;
