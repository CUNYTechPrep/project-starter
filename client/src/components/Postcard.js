import React from 'react';
import { Link } from 'react-router-dom';
import './Postcard.css'


function Postcard() {
  return (
    <div className="col-10 col-md-8 col-lg-7 p-0 mx-0 my-4  ">
      <div className="post-container shadow row">
        <div className="img-area col-8 p-0">
          <div className="">
            
          </div>
        </div>
        <div className="text-area col-4 p-0 "> 
          <div className="post-title">
            <div className="one">
              <h3>Title</h3>
            </div>
            <div className="two"> 
              <svg width="30" height="30" version="1.1" viewBox="0 0 79.375 79.375" xmlns="http://www.w3.org/2000/svg"><g transform="translate(261.77 26.254)" opacity=".998"><g transform="translate(-264.22 151.12)" fill="#808080" opacity=".998"><path d="m23.904-137.65a7.9375 7.9375 0 0 1-7.9375 7.9375 7.9375 7.9375 0 0 1-7.9375-7.9375 7.9375 7.9375 0 0 1 7.9375-7.9375 7.9375 7.9375 0 0 1 7.9375 7.9375z" opacity=".997"/><path d="m49.337-137.73a7.9375 7.9375 0 0 1-7.9375 7.9375 7.9375 7.9375 0 0 1-7.9375-7.9375 7.9375 7.9375 0 0 1 7.9375-7.9375 7.9375 7.9375 0 0 1 7.9375 7.9375z" opacity=".997"/><path d="m76.248-137.73a7.9375 7.9375 0 0 1-7.9375 7.9375 7.9375 7.9375 0 0 1-7.9375-7.9375 7.9375 7.9375 0 0 1 7.9375-7.9375 7.9375 7.9375 0 0 1 7.9375 7.9375z" opacity=".997"/></g></g></svg>
            </div>
            <div className="three">
              <h5>Author</h5> 
            </div> 
            <div className="four">
              <h5>Location (Coords)</h5>  
            </div>
          </div>
          <div className="post-body">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
              when an unknown printer took a galley of type and scrambled it to make a type 
              specimen book.</p>
            <div className="post-categ">
              <button type="button" class="btn btn-primary m-1">Attraction</button>
              <button type="button" class="btn btn-primary m-1">Landmark</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Postcard;