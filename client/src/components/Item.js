import React, { Component } from "react";
import {Card, Image} from 'react-bootstrap';
import { Link } from "react-router-dom";
class Item extends Component {
    render() {
        const { id, items } = this.props;
        const item = items[id];
        return (
            <Card >
                <Link to={`/products/${id}`}> 
                    <Image src={item['imageLink']} fluid />
                    <Card.Body>
                        <Card.Title><b>{item['name']}</b></Card.Title>
                        <hr/>
                        <div className="flex">
                            <Card.Text>{item['color']}</Card.Text> 

                            <Card.Text>${item['price']}</Card.Text>
                        </div>
                    </Card.Body>
                </Link>
            </Card>
        )
    }
}

export default Item;