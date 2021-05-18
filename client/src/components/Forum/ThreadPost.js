import React from 'react';
import '../../css/Thread.css';

const ThreadPost = (id, content, title, createdAt, updatedAt, forumId, threadId, authorId, author, props) => {

// I want to map HERE
    return (
      <div>
        {/* {threadPosts.map((t) => */}
          <div>
            <p className="post-date">Posted on: 
                {createdAt} 
              02-13-2021 9:20am
            </p>
            <article className="each-post">
              <div>
                <div className="user-info-container">
                  <h6> 
                    John Cena
                    {author.firstName + ' ' + author.lastName} 
                  </h6>
                  <img
                    className="user-pp"
                    src="https://resizing.flixster.com/IpEFWZUF1Cd_NZPC5gCEVhcJd-M=/506x652/v2/https://flxt.tmsimg.com/v9/AllPhotos/487578/487578_v9_ba.jpg"
                    width="90px"
                    height="90px"
                  ></img>
                  <p>
                    Height: 
                    6'1 
                    {author.height} 
                  </p>
                  <p>Weight:251 lbs</p>
                </div>
                <div>
                  <p>
                    <b>
                      {title}
                      Best ways to Bulk while cutting?
                    </b>
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
                    <i>
                      Last edited on: 
                      {updatedAt}
                      02-13-2021 9:20am
                    </i>
                  </p>
                </div>
              </div>
            </article>
          </div>
      </div>
    );
}

export default ThreadPost;
