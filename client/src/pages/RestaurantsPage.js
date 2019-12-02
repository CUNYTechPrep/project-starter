import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {
  Row, Col, Card, CardBody, CardTitle, CardText, CardImg
} from 'reactstrap';


class RestaurantsPage extends React.Component{
  constructor(){
    super();
    this.state = {
      'items':[]
    }
  }
  getLocation(){

  }
  componentDidMount(){
    this.getRes();
  }

getRes(){
const lat = sessionStorage.getItem("lat");
const lng = sessionStorage.getItem("lng");
fetch('/api/places?lat='+lat+'&lng='+lng+'&keyword=bar')
  .then(res => res.json())
  .then(res => this.setState({'items':res.json.results}));
  }
render() {

  return (
    <ul>
    {this.state.items.map(function(item, index) {
        return (
        <ContentItem item = {item} key={index} />

    )
    })
    }
    </ul>);
 }

}
const ContentItem = ({item}) => (

   <Row>
     <Col xs="3" />
     <Col xs="12" sm="6">
       <Card>
         <CardBody>
           <CardTitle>
             <CardImg top width="100%" src={"https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference="+item.photos[0].photo_reference+"&key=________________"}></CardImg>
             {item.name}
           </CardTitle>
           <CardText>
             {"Rating: "+item.rating}
           </CardText>
         </CardBody>
       </Card>
     </Col>
   </Row>
  )

export default RestaurantsPage;
