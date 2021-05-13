import React from "react";
import "../styles/aboutPage.css";

function AboutUsPage(props) {
  return (
    <div>
      <div className="bg-white py-4">
        <div className="container">
          <div className="row align-items-center mb-5">
            <div className="col-lg-12 order-2 order-lg-1">
              <h2 class="font-weight-light">About Us</h2>
              <p class="font-italic text-muted mb-4">
                NYC families can use <b>School Finder</b> to find and narrow their choice of public schools from elementary school to high school.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer venenatis, purus sed tristique suscipit, diam leo laoreet 
                urna, nec venenatis velit ante id dui. Sed commodo risus non lobortis sagittis. Sed vel erat aliquam lectus rhoncus imperdiet 
                ac sit amet eros. Sed nec purus non metus sagittis dapibus. Nulla facilisi. In diam est, interdum in varius eu, tincidunt sed mi. 
                Etiam pellentesque dignissim fringilla. Integer bibendum sem lectus, rutrum pharetra dui sollicitudin nec. 
              </p>
                <a href="#" class="btn btn-light px-5 rounded-pill shadow-sm">
                Try it out
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-light py-5">
        <div className="container">
          <div className="row mb-4">
            <div className="col-lg-5">
              <h2 className="display-10 font-weight-light">Our Team</h2>
            </div>
          </div>

          <div className="row text-center mx-auto">
          
          <div className="col-lg-6 col-sm-6 mb-5">
            <div class="bg-white rounded shadow-sm py-5 px-4">
              <img />
              <h6 class="mb-0">Patrick Chae</h6>
                <ul class="social mb-0 list-inline mt-3">
                  <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-github"></i></a></li>
                  <li class="list-inline-item"><a href="#" class="social-link"><i class="fa fa-linkedin"></i></a></li>
                </ul>
            </div>
          </div>

          <div className="col-lg-6 col-sm-6 mb-5">
            <div class="bg-white rounded shadow-sm py-5 px-4">
              <img />
              <h6 class="mb-0">Linda Li</h6>
                <ul class="social mb-0 list-inline mt-3">
                  <li class="list-inline-item"><a href="https://github.com/lindaerin" class="social-link"><i class="fa fa-github"></i></a></li>
                  <li class="list-inline-item"><a href="https://www.linkedin.com/in/lindaerin/" class="social-link"><i class="fa fa-linkedin"></i></a></li>
                </ul>
            </div>
          </div>

          <div className="col-lg-6 col-sm-6 mb-5">
            <div class="bg-white rounded shadow-sm py-5 px-4">
              <img />
              <h6 class="mb-0">William Lee</h6>
                <ul class="social mb-0 list-inline mt-3">
                  <li class="list-inline-item"><a href="https://github.com/wlee004" class="social-link"><i class="fa fa-github"></i></a></li>
                  <li class="list-inline-item"><a href="https://www.linkedin.com/in/william-lee004/" class="social-link"><i class="fa fa-linkedin"></i></a></li>
                </ul>
            </div>
          </div>

          <div className="col-lg-6 col-sm-6 mb-5">
            <div class="bg-white rounded shadow-sm py-5 px-4">
              <img />
              <h6 class="mb-0">Josephine Pho</h6>
                <ul class="social mb-0 list-inline mt-3">
                  <li class="list-inline-item"><a href="https://github.com/jpho8799" class="social-link"><i class="fa fa-github"></i></a></li>
                  <li class="list-inline-item"><a href="https://www.linkedin.com/in/josephine-pho/" class="social-link"><i class="fa fa-linkedin"></i></a></li>
                </ul>
            </div>
          </div>

      </div>

        </div>

 

        
      </div>


    </div>
  );
}

export default AboutUsPage;
