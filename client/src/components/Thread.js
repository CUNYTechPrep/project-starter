import React from 'react-dom';
import ThreadPost from './ThreadPost';
import './Thread.css';

function Thread(props) {
  return (
    <div>
      <h5>
        <b>Thread: </b>
        <text>Best ways to cut while bulking?</text>
      </h5>
      <p>Posted on: 02-13-2021 9:20am</p>
      <ThreadPost />
    </div>
  );
}

export default Thread;
