import React, { Component } from "react";
import {Container, Row, Col, Card, Button} from 'react-bootstrap';
class Item extends Component {
    render() {
        const { item } = this.props;
        return (
            <Card style={{ width: '20rem', marginLeft: '25px' }}>
                <Card.Img variant="top" src={item['imageLink']} style={{width: '18rem'}}/>
                <Card.Body>
                    <Card.Title><b>{item['name']}</b></Card.Title>
                    <hr/>
                    <div className="flex">
                        <Card.Text>{item['color']}</Card.Text> 

                        <Card.Text>${item['price']}</Card.Text>
                    </div>
                </Card.Body>
            </Card>
        )
    }
}

export default Item;