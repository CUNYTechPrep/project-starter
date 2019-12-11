import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {
  Row, Col, Card, CardBody, CardTitle, CardText, CardImg
} from 'reactstrap';
//const Google_token = Sys.getenv("GOOGLE_MAPS_API_KEY");
import '../style/res.css';



class RestaurantsPage extends React.Component {
  constructor() {
    super();
    this.state = {
      'items': []
    }
  }
  getLocation() {

  }
  componentDidMount() {
    this.getRes();
  }

  getRes() {
    fetch('/api/places?lat=40.7666332999999952&lng=-73.99474479999999&keyword=restaurants')
      .then(res => res.json())
      .then(res => this.setState({ 'items': res.json.results }));
  }
  render() {

    return (
      <Row>
        {this.state.items.map(function (item, index) {
          return (
            <ContentItem item={item} key={index} />

          )
        })
        }
      </Row>);
  }


  // <div>Lists of Restaurants</div>

}
const ContentItem = ({ item }) => (



  <Col xs="12" sm="6" md="4">
    <Card>
      <CardBody>
        <CardTitle>
          {<CardImg className="aa" top width="100%" src={"https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=" + item.photos[0].photo_reference + "&key=AIzaSyBtd93FCtB6B-vJlN9O5oDQQBbH_hi5YoI"}></CardImg>}
          {item.name}
        </CardTitle>
        <CardText>
          {"Rating: " + item.rating}
        </CardText>
      </CardBody>
    </Card>
  </Col>

)

// < Row >
// <Col xs="3" />
// <Col xs="12" sm="6">
//   <Card>
//     <CardBody>
//       <CardTitle>
//         <CardImg top width="100%" src={"https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=" + item.photos[0].photo_reference + "&key=___"}></CardImg>
//         {item.name}
//       </CardTitle>
//       <CardText>
//         {"Rating: " + item.rating}
//       </CardText>
//     </CardBody>
//   </Card>
// </Col>
//  </Row >
// )

export default RestaurantsPage;
