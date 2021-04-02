import React from 'react-dom';
import ThreadPost from './ThreadPost';

function Thread(props) {
  return (
    <div>
      <h4>
        <b>Thread:</b>
        <text>Best ways to cut while bulking?</text>
      </h4>
      <ThreadPost />
    </div>
  );
}

export default Thread;
