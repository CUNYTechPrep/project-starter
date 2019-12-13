import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, CardLink, CardDeck
} from 'reactstrap';



  function Person({ name, role, ghub, lin, bio, pic }){
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={this.props.pic} alt="Reentry Team Member" />
        <CardBody>
          <CardTitle>{this.props.name}</CardTitle>
          <CardSubtitle>{this.props.role}</CardSubtitle>
          <CardLink href={this.props.ghub}>GitHub</CardLink>
          <CardLink href={this.props.lin}>LinkedIn</CardLink>
          <CardText>{this.props.bio}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

export default Person;