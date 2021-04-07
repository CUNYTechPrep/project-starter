import React from 'react';
import PostUserInfo from './ThreadPostUserInfo';
import PostInfo from './ThreadPostInfo';
import '../../css/Thread.css';

function ThreadPost(props) {
  return (
    <div>
      <p className="post-date">Posted on: 02-13-2021 9:20am</p>
      <article className="each-post">
        <PostUserInfo />
        <PostInfo />
      </article>
    </div>
  );
}

export default ThreadPost;
