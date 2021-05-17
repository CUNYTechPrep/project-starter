import React from 'react-dom';
import ThreadPost from './ThreadPost';
import '../../css/Thread.css';

//Here we want to map out all the posts here from threadPosts table

function Thread ({forum}) {
  
    return (
      <div>
        <h6 className="thread-heading">
          <b>Thread: </b>
          <text className="thread-topic">
            Best ways to cut while bulking? 
            {/* Here above we want to have gotten threadTitle from Forum table here, shown below */}
            {/* {this.props.threadTitle} */}
          </text>
        </h6>
        {/* Here is where in a loop or mapping we would map all posts connected to the FORUM ID */}
        <ThreadPost />
      </div>
    );
  
}

export default Thread;
