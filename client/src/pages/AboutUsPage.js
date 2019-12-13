import React from 'react';
import './AboutUs.css';
import 'bootstrap/dist/css/bootstrap.css';
import {
  Row, Col, Card, CardBody, CardTitle, CardText, CardImg
} from 'reactstrap';
var Adrian = require('./images/Adrian.jpg')
var Zaiba = require('./images/Zaiba.jpeg')
var Julio = require('./images/Julio.jpg')
function AboutUsPage(props) {
  return (
    < Row >
      <Col xs="3" />
      <Col xs="12" sm="6">
        <Card>
          <CardBody>
            <CardTitle>
              <CardImg top width="100%" src={Adrian} className="img-thumbnail"></CardImg>
              {"Adrian"}
            </CardTitle>
            <CardText>
              {"Senior at Hunter College graduating Spring 2020"}
              <br></br>
              <a href={"https://github.com/Adrianbarros"}>Adrian's Github</a>
            </CardText>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <CardTitle>
              <CardImg top width="100%" src={Zaiba} className="img-thumbnail"></CardImg>
              {"Zaiba"}
            </CardTitle>
            <CardText>
              {"Senior at Hunter College graduating Spring 2020"}
              <br></br>
              <a href={"https://github.com/Zaiba123"}>Zaiba's Github</a>
            </CardText>
          </CardBody>
        </Card>
        <Card>
          <CardBody>
            <CardTitle>
              <CardImg top width="100%" src={Julio} className="img-thumbnail"></CardImg>
              {"Julio"}
            </CardTitle>
            <CardText>
              {"Junior at John Jay College graduating Winter 2020"}
              <br></br>
              <a href={"https://github.com/JulioJuar00"}>Julio's Github</a>
            </CardText>
          </CardBody>
        </Card>
      </Col>
    </Row >
  );
}
export default AboutUsPage;



