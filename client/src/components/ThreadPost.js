import React from 'react';
import PostUserInfo from './PostUserInfo';
import './Thread.css';

function ThreadPost(props) {
  return (
    <div>
      <p className="post-date">Posted on: 02-13-2021 9:20am</p>
      <article className="thread">
        <PostUserInfo />
        <p>
          <b>Best ways to Bulk while cutting?</b>
          <br></br>
          <br></br>
          Hola Buddies! As you are all probably aware, summer is coming and you
          know what they say ..."Suns out, tums out!", or rather, that's what I
          usually say. My goal is to change "tums" into "guns" and to do that I
          need to lose fat while simultaneously building muscle, all before June
          comes around. Does anyone have experience attempting and succeeding or
          failing and wouldn't mind sharing what they learned, or if it's just
          an unachievable dream you can say that too :/ Thanks!
        </p>
        <p>
          <i>Last edited on: 02-13-2021 9:20am</i>
        </p>
      </article>
    </div>
  );
}

export default ThreadPost;
