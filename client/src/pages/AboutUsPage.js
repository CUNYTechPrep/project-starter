import React from "react";
import {Card, CardDeck} from 'react-bootstrap';
import LandingNav from "../components/LandingNav";

const styles = {
  card: {
    margin: '3rem'
  }
}

const Team = () =>
<CardDeck style={styles.card}>
  <Card>
    <Card.Img variant="top" src="https://media-exp1.licdn.com/dms/image/C4E03AQEb3eGUgSP-ug/profile-displayphoto-shrink_400_400/0/1604602993763?e=1626912000&v=beta&t=59ZV_7Vw-1-1DjgqA11t7NzUNm6TLbIlGuleI4SZ4xU" />
    <Card.Body>
      <Card.Title>Jephter Maurice</Card.Title>
      <Card.Text>
        Jephter is a senior Computer Science student at Queens College and incoming Amazon intern for the summer. 
      </Card.Text>
      <Card.Link href="https://www.linkedin.com/in/jephtermaurice/">LinkedIn</Card.Link>
      <Card.Link href="https://github.com/Mjephter2">Github</Card.Link>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://ca.slack-edge.com/T016TJTJSFN-U017WULGLRL-g1c406dafade-512" />
    <Card.Body>
      <Card.Title>Anthony Boris</Card.Title>
      <Card.Text>
      Boris is a senior Computer Science student at Queens College.
      </Card.Text>
      <Card.Link href="https://www.linkedin.com/in/boris--anthony/">LinkedIn</Card.Link>
      <Card.Link href="https://github.com/anthonyrepo">Github</Card.Link>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://ca.slack-edge.com/T016TJTJSFN-U017PF4CZ55-aeabddd07268-512" />
    <Card.Body>
      <Card.Title>Shanice Smith</Card.Title>
      <Card.Text>
      Shanice is a senior Game Design student at New York City College of Technology and incoming EA intern for the summer.
      </Card.Text>
      <Card.Link href="https://www.linkedin.com/in/shanicesmith-swe/">LinkedIn</Card.Link>
      <Card.Link href="https://github.com/shanicesmith98">Github</Card.Link>
    </Card.Body>
  </Card>
</CardDeck>
;
class AboutUsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  };
  
  render() {
    return (
      <React.Fragment>
        <LandingNav />
        <h1 style={{ color: "white" }}>About Us Page</h1>
        <Team />
      </React.Fragment>
    );
  }
}

export default AboutUsPage;
