import featureImage1 from "../Photoes/image2vector.svg"
import featureImage2 from "../Photoes/pic3.svg"
import featureImage3 from "../Photoes/pic3.png"
function Features() {
    return (
    <div>
        <div class="container-fluid row feature-container">
            <img class="col-lg-7 col-md-12 img-fluid" src={featureImage1}/>
            <div class="row col-lg-5 col-md-12 text-left feature-text">
                <div class="feature-title">Consult our Forums</div>
                <div class="feature-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            </div>
        </div>

        <div class="container row feature-container bg-light mx-auto">
            <img class="col-lg-7 col-md-12 img-fluid" src={featureImage2}/>
            <div class="row col-lg-5 col-md-12 order-lg-first text-left feature-text">
                <div class="feature-title">Share your Stress</div>
                <div class="feature-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            </div>
        </div>

        <div class="container-fluid row feature-container">
            <img class="col-lg-7 col-md-12" src={featureImage3}/>
            <div class="row col-lg-5 col-md-12 text-left feature-text">
                <div class="feature-title">Recieve Help</div>
                <div class="feature-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            </div>
        </div>
    </div>
    );
  }
  
  export default Features;
  