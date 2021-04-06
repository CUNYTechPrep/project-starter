import React from 'react-dom';
import ThreadPost from './ThreadPost';
import './Thread.css';
import { Link } from 'react-router-dom';

function Thread(props) {
  return (
    <div>
      <h6 className="thread-heading">
        <b>Thread: </b>
        <text className="thread-topic">
          <Link to="/thread">Best ways to cut while bulking?</Link>
        </text>
      </h6>
      <ThreadPost />
    </div>
  );
}

export default Thread;
