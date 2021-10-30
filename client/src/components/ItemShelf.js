import React, { Component } from 'react';
import Item from './Item';
import {Container, Row, Col} from 'react-bootstrap';
class ItemShelf extends Component{
    render() {
        const { items, shelfItems } = this.props;
        return(
            <Container>
                <Row>

                        {shelfItems.map((id,idx) => (
                            <Col sm={6} md={4} lg={3}>
                                    <Item
                                    key={idx}
                                    id={id}
                                    items={items}/>
                            </Col>
                        ))}
                </Row>
            </Container>
        )
    }
}

export default ItemShelf;
