import React from 'react';
import { Redirect } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

class HomePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      signedIn: false,
      displaySeeker: false,
      displayEmployer: false,
      show: false,
      setShow : false,
    };
  }

  carousel = () => {
    return (
      <div id="carouselExampleInterval" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active" data-interval="10000">
            <img src="..." class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item" data-interval="2000">
            <img src="..." class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="..." class="d-block w-100" alt="..." />
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    );
  };

  seekerForm = (event) => {
    return (
      <div>

        <Modal show="true" onHide={(event) => this.setState({displaySeeker: false})}>
          <Modal.Header closeButton>
            <Modal.Title>Let's Get Started!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            First Name<br />
            <input type="text" placeholder="John" required />
            Last Name<br />
            <input type="text" placeholder="Doe" required />
            Email Address<br />
            <input type="text" placeholder="jdoe@example.com" required />
            City<br />
            <input type="text" placeholder="Buffalo" />
            State<br />
            <input type="text" placeholder="New York" required />
            Zip Code<br />
            <input type="text" placeholder="10450" required />
            Experience (select as many as apply)<br />
            <input type="checkbox" name="looking-for" value="GD" />
            Graphic Designer<br />
            <input type="checkbox" name="looking-for" value="PA" />
            Painter<br />
            <input type="checkbox" name="looking-for" value="EL" />
            Electrician<br />
            <input type="checkbox" name="looking-for" value="CA" />
            Carpenter<br />
            <input type="checkbox" name="looking-for" value="FS" />
            Food Servicer<br />
            <input type="checkbox" name="looking-for" value="OT" />
            Other<br />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={(event) => this.setState({displaySeeker: false})}>
              Close
           </Button>
            <Button variant="primary" onClick={(event) => this.setState({displaySeeker: false})}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
  employerForm = () => {
  return (
    <div>
      <Modal show="true" onHide={(event) => this.setState({displayEmployer: false})}>
        <Modal.Header closeButton>
          <Modal.Title>Welcome Aboard</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          First Name<br />
          <input type="text" placeholder="John" required />
          Last Name<br />
          <input type="text" placeholder="Doe" required />
          Email Address<br />
          <input type="text" placeholder="jdoe@example.com" required />
          Business Name<br />
          <input type="text" placeholder="Reentry Org" required />
          City<br />
          <input type="text" placeholder="Buffalo" />
          State<br />
          <input type="text" placeholder="New York" required />
          Zip Code<br />
          <input type="text" placeholder="10450" required />
          Looking For (select as many as apply)<br />
          <input type="checkbox" name="looking-for" value="GD" />
          Graphic Designer<br />
          <input type="checkbox" name="looking-for" value="PA" />
          Painter<br />
          <input type="checkbox" name="looking-for" value="EL" />
          Electrician<br />
          <input type="checkbox" name="looking-for" value="CA" />
          Carpenter<br />
          <input type="checkbox" name="looking-for" value="FS" />
          Food Servicer<br />
          <input type="checkbox" name="looking-for" value="OT" />
          Other<br />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={(event) => this.setState({displayEmployer: false})}>
            Close
          </Button>
          <Button variant="primary" onClick={(event) => this.setState({displayEmployer: false})}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    );
  };
  render() {
    const {displaySeeker} = this.state;
    const {displayEmployer} = this.state;
    const {carousel} = this.state;
    return (
      <div>
        <div>The First Step is Reentry</div>
        {carousel}
        <button className="" onClick={(event) => this.setState({displaySeeker: true})}>Seeker</button>
        {displaySeeker && this.seekerForm()}
        <button className="" onClick={(event) => this.setState({displayEmployer: true})}>Employers</button>
        {displayEmployer && this.employerForm()}
      </div>
    );
  }
}
export default HomePage;
