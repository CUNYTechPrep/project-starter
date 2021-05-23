import React from 'react';
import '../../css/Thread.css';

const ThreadPost = (props) => {
  // I want to map HERE
  // get the array of threadPosts here and then map it here
  var imageURL = props.post.author.image + '.jpg';
  return (
    <div>
      <p className='post-date'> Posted on: {props.post.createdAt} </p>
      <article className='each-post'>
        <div className='thread-container'>
          <div className='user-info-container'>
            <h6>
              {props.post.author.firstName + ' ' + props.post.author.lastName}
            </h6>
            <img
              className='user-pp'
              src={imageURL}
              width='100px'
              height='90px'
            ></img>
            <p> Height: {props.post.author.height} In </p>
            <p> Weight: {props.post.author.weight} lbs</p>
          </div>
          <div className='post-content-container'>
            <p>
              <b> {props.post.title} </b>
              <br></br>
              <br></br>
              {props.post.content}
            </p>
            <p className='post-last-edited-date'>
              <i> Last edited on: {props.post.updatedAt} </i>
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};

export default ThreadPost;
