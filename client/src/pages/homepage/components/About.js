// import '../profile_images/profile1.png'
function About() {
    return (
        <div className="container-fluid py-5 bg-light">
            <div className="heading-60 text-center">About Us</div>
            <div className="row profiles container mx-auto">
            <div className="col-md-4 col-sm-12">
                <img className="img-fluid rounded-circle asd" alt="profile" src={require("../profile_images/profile1.png")}/>
                <p className="heading-name">Name</p>
                <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="col-md-4 col-sm-12">
                <img className="img-fluid rounded-circle asd" alt="profile" src={require("../profile_images/profile2.png")}/>
                <p className="heading-name">Name</p>
                <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="col-md-4 col-sm-12">
                <img className="img-fluid rounded-circle asd" alt="profile" src={require("../profile_images/profile3.png")}/>
                <p className="heading-name">Name</p>
                <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            </div>
        </div>
    );
  }
  
  export default About;
  