import React from 'react';
import PostUserInfo from './PostUserInfo';
import './Thread.css';

function ThreadPost(props) {
  return (
    <article className="thread">
      <PostUserInfo />
      <h6>Best ways to Bulk while cutting?</h6>
      <p>
        Hola Buddies! As you are all probably aware, summer is coming and you
        know what they say ..."Suns out, tums out!", or rather, that's what I
        usually say. My goal is to change "tums" into "guns" and to do that I
        need to lose fat while simultaneously building muscle, all before June
        comes around. Does anyone have experience attempting and succeeding or
        failing and wouldn't mind sharing what they learned, or if it's just an
        unachievable dream you can say that too :/ Thanks!
      </p>
      <p>
        <i>Last edited on: 02-13-2021 9:20am</i>
      </p>
    </article>
  );
}

export default ThreadPost;
