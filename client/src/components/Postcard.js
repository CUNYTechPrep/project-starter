import React from 'react';
//import { Link } from 'react-router-dom';
import './Postcard.css'


function Postcard({ post, media, location, key }) {
  return (
    <div className="col-10 col-md-8 col-lg-7 p-0 mx-0 my-4  ">
      <div className="post-container shadow row">
        <div className="img-area col-8 p-0">
          <div className="post-profile-pic">
            <svg width="72" height="72" version="1.1" viewBox="0 0 19.05 19.05" xmlns="http://www.w3.org/2000/svg"><g transform="translate(230.5 -2.8193)" opacity=".998"><g transform="matrix(.13306 0 0 .13306 -239.18 30.508)" opacity=".998"><path d="m208.44-136.51a71.586 71.586 0 0 1-71.586 71.586 71.586 71.586 0 0 1-71.586-71.586 71.586 71.586 0 0 1 71.586-71.586 71.586 71.586 0 0 1 71.586 71.586z" fill="#e6ffe9" opacity=".997"/><g transform="matrix(.66769 0 0 .66769 -68.31 -56.403)" fill="none" stroke="#7c4ea3" strokeWidth="6.3403"><path d="m334.58-154.11c0 9.2658-4.0462 17.104-8.8551 23.176-4.8089 6.0721-10.38 10.378-17.718 10.378s-12.734-4.3694-17.543-10.442c-4.8089-6.0721-9.031-13.847-9.031-23.113 0-18.532 11.897-33.554 26.573-33.554s26.574 15.023 26.574 33.554z" opacity="1"/><path d="m361.76-76.443c0 21.022-20.768 16.22-50.454 16.22-29.686 0-57.048 4.8013-57.048-16.22 0-21.022 24.065-38.063 53.751-38.063s53.751 17.042 53.751 38.063z" opacity=".997"/></g></g></g></svg>
          </div>
          <div className="post-sharing-controls">
            <svg width="30" height="30" version="1.1" viewBox="0 0 7.9375 7.9375" xmlns="http://www.w3.org/2000/svg"><g transform="translate(226.2 -9.0061)" opacity=".998"><path d="m-222.23 9.0061 1.2264 2.7919 2.7423 0.13778-1.9844 2.0338 0.46845 2.974-2.4528-1.6002-2.4528 1.6002 0.46844-2.974-1.9844-2.0338 2.7423-0.13778z" color="#000000" color-rendering="auto" dominant-baseline="auto" fill="#fd5" fill-rule="evenodd" image-rendering="auto" shape-rendering="auto" solid-color="#000000" stop-color="#000000" Style="font-feature-settings:normal;font-variant-alternates:normal;font-variant-caps:normal;font-variant-east-asian:normal;font-variant-ligatures:normal;font-variant-numeric:normal;font-variant-position:normal;font-variation-settings:normal;inline-size:0;isolation:auto;mix-blend-mode:normal;shape-margin:0;shape-padding:0;text-decoration-color:#000000;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-orientation:mixed;text-transform:none;white-space:normal"/></g></svg>
            <svg width="30" height="30.027" version="1.1" viewBox="0 0 7.9375 7.9447" xmlns="http://www.w3.org/2000/svg"><g transform="translate(225.92 -9.5087)" opacity=".998"><path d="m-217.98 12.651-2.2014 3.1418v-1.9204s-1.0421-1.0053-2.6853-0.3593c-2.3829 0.9368-3.009 4.1248-3.0458 3.9325-0.0729-0.3813 0.64423-4.101 2.5486-5.2154 1.8444-1.0793 3.1825-0.80055 3.1825-0.80055v-1.9204z" fill="#f2f2f2" fill-rule="evenodd" opacity=".998" strokeWidth=".024951"/></g></svg>
          </div>
          <div className="post-prev-pic-btn">
            <svg width="20" height="20" version="1.1" viewBox="0 0 5.2917 5.2917" xmlns="http://www.w3.org/2000/svg"><g transform="translate(249.14 13.037)" opacity=".998"><path transform="matrix(-.078115 0 0 .067649 -251.15 .82304)" d="m-25.84-165.77-67.742 39.111 2e-6 -39.111-2e-6 -39.111 33.871 19.555z" fill="#f2f2f2" opacity=".997" Style="mix-blend-mode:normal"/></g></svg>
          </div>
          <div className="post-next-pic-btn">
            <svg width="20" height="20" version="1.1" viewBox="0 0 5.2917 5.2917" xmlns="http://www.w3.org/2000/svg"><g transform="translate(273.36 37.321)" opacity=".998"><path transform="matrix(.078115 0 0 .067649 -266.05 -23.461)" d="m-25.84-165.77-67.742 39.111 2e-6 -39.111-2e-6 -39.111 33.871 19.555z" fill="#f2f2f2" opacity=".997" Style="mix-blend-mode:normal"/></g></svg>
          </div>
          <div className="post-likes">
            <p>{post.likes}</p>
            <svg width="30" height="30" version="1.1" viewBox="0 0 7.9375 7.9375" xmlns="http://www.w3.org/2000/svg"><g transform="translate(274.45 38.853)" opacity=".998"><path d="m-274.45-35.811 3.9688-3.0422 3.9688 3.0422v1.4814l-1.6896-0.0054v3.4193h-4.5583v-3.4193l-1.6896 0.0054z" fill="#f55" opacity=".998" strokeWidth="1.26"/></g></svg>
            <svg width="30" height="30" version="1.1" viewBox="0 0 7.9375 7.9375" xmlns="http://www.w3.org/2000/svg"><g transform="translate(279.65 44.137)" opacity=".998"><path d="m-279.65-39.242 3.9688 3.0422 3.9688-3.0422v-1.4814l-1.6896 0.0053-1e-5 -3.4193h-4.5583v3.4193l-1.6896-0.0053z" fill="#55f" opacity=".998" strokeWidth="1.26"/></g></svg>
            <p>{post.dislikes}</p>
          </div>
          <div className="post-pic-enlarge">
            <svg width="30" height="30" version="1.1" viewBox="0 0 7.9375 7.9375" xmlns="http://www.w3.org/2000/svg"><g transform="translate(275.04 38.727)" opacity=".998"><path d="m-275.04-38.727v3.3073h0.66146v-2.6458h2.6458v-0.66146zm4.6302 0v0.66146h2.6458v2.6458h0.66146v-3.3073zm-4.6302 4.6302v3.3073h3.3073v-0.66146h-2.6458v-2.6458zm7.276 0v2.6458h-2.6458v0.66146h3.3073v-3.3073z" fill="#f2f2f2" opacity=".997"/></g></svg>
          </div>
        </div>
        <div className="text-area col-4 p-0 "> 
          <div className="post-title">
            <div className="one">
              <h3>{post.title}</h3>
            </div>
            <div className="two"> 
              <svg width="30" height="30" version="1.1" viewBox="0 0 79.375 79.375" xmlns="http://www.w3.org/2000/svg"><g transform="translate(261.77 26.254)" opacity=".998"><g transform="translate(-264.22 151.12)" fill="#808080" opacity=".998"><path d="m23.904-137.65a7.9375 7.9375 0 0 1-7.9375 7.9375 7.9375 7.9375 0 0 1-7.9375-7.9375 7.9375 7.9375 0 0 1 7.9375-7.9375 7.9375 7.9375 0 0 1 7.9375 7.9375z" opacity=".997"/><path d="m49.337-137.73a7.9375 7.9375 0 0 1-7.9375 7.9375 7.9375 7.9375 0 0 1-7.9375-7.9375 7.9375 7.9375 0 0 1 7.9375-7.9375 7.9375 7.9375 0 0 1 7.9375 7.9375z" opacity=".997"/><path d="m76.248-137.73a7.9375 7.9375 0 0 1-7.9375 7.9375 7.9375 7.9375 0 0 1-7.9375-7.9375 7.9375 7.9375 0 0 1 7.9375-7.9375 7.9375 7.9375 0 0 1 7.9375 7.9375z" opacity=".997"/></g></g></svg>
            </div>
            <div className="three">
              <h5>Author</h5> 
            </div> 
            <div className="four">
              <h5>{location.city}, {location.state} ({location.lat}, {location.lng})</h5>  
            </div>
          </div>
          <div className="post-body">
            <p>{post.body}</p>
            <div className="post-categ">
              <button type="button" className="btn btn-primary m-1">Attraction</button>
              <button type="button" className="btn btn-primary m-1">Landmark</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Postcard;