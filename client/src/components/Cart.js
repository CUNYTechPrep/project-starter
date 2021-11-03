import React, { Component, useState } from "react";
import {Container, Row, Col, Card, Button} from 'react-bootstrap';
import ItemDetail from "./ItemDetail";
class Cart extends Component{
    constructor(props) {
        super(props);
        this.state = {
          count: 0,
          list:[],
          quantity:'1'
        };
      }
    handleSubmit = (event) => {
        event.preventDefault();
        const {quantity, size} = this.state;
        console.log(quantity, size);
        this.setState({
            quantity: "1",
            size: "xxs"})
    }
    handleChange = (event) => {
        const value= event.target.value;
        console.log(value)
        this.setState({
            [event.target.name]: value
        })
    }
    render() {
        const { items } = this.props;
        const item = items[0];
        const {quantity, size} = this.state;
        return(
            <Container>
                <Row className="horizontal">
                <header>
                    <div>
                        <button>Go To Cart ( {})</button>
                        <button>view products</button>
                    </div>
                </header>
                <Card style={{ width: '100%' }}>
                    <Card.Body>
                        <Row>
                            <Col xs={6} md={4}>
                                <Card.Title style={{fontSize:'30px', fontWeight:'600'}}>Description</Card.Title>
                            </Col>
                            <Col xs={6} md={4}>
                                <Card.Title style={{fontSize:'30px', fontWeight:'600', textAlign:'center'}}>Quantity</Card.Title>
                            </Col>
                            <Col xs={6} md={4}>
                                <Card.Title style={{fontSize:'30px', fontWeight:'600',float:'right'}}>price</Card.Title>
                            </Col>
                        </Row>
                            <hr bold="200"/>
                        <Row>
                            <Col className="flex"  xs={6} md={4}>
                                <Card.Img variant="top" src={item['imageLink']} style={{width: '10rem'}}/>
                            <Col style={{marginTop: '50px'}} >
                                <Card.Title ><b>{item['name']}</b></Card.Title>
                                <Card.Text> xs </Card.Text>
                                <Button> remove </Button>
                            </Col>
                            </Col>
                            <Col xs={6} md={4}>
                                <input style={{marginLeft:'180px',marginTop: '50px',width:'40px'}} type="number" value={quantity} name="quantity" onChange={this.handleChange} min="1" />
                            </Col>
                            <Col xs={6} md={4}>
                                <Card.Text style={{fontSize:'20px', fontWeight:'600',float:'right',marginTop: '50px'}}>${item['price']}</Card.Text>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                <Card body style={{ width: '100%' }}>
                    <div style={{float:'right'}}>
                    <Button variant="secondary" size="lg" type="submit" style={{background:'#FFFFFF',color:'#000000', fontWeight:'500',  }}>
                        Update
                    </Button>
                    <Card.Text style={{textAlign:'right',marginTop:'45px'}}> SubTotal</Card.Text>
                    </div>
                </Card>
                <Card body style={{ width: '100%' }}>
                    <Card.Text style={{textAlign:'right', fontSize:'30px', fontWeight:'600' }}> ${item['price']}</Card.Text>
                    <div style={{}}>
                    <Button variant="secondary" size="lg" type="submit" style={{background:'#000000',color:'#FFFFFF', float:'right' }}>
                        CheckOut
                    </Button>
                    </div>
                </Card>
                {/* <Col>
                    <Card style={{ width: '25rem' }}>
                        <Card.Body>
                            <Card.Title style={{fontSize:'30px', fontWeight:'600'}}>Total</Card.Title>
                            <hr bold="200"/>
                            <div className="flex">
                                <Card.Text style={{fontSize:'20px', fontWeight:'600'}}> Sub Total</Card.Text>
                                <Card.Text style={{fontSize:'20px', fontWeight:'400'}}>${item['price']}</Card.Text>
                            </div>
                            <div className="d-grid gap-2 button" >
                                    <Button variant="secondary" size="lg" type="submit" style={{background:'#228B22', fontWeight:'600'}}>
                                        Check Out
                                    </Button>
                            </div>
                            </Card.Body>
                    </Card>
                </Col> */}
                </Row>
            </Container>
        )
    }
}
export default Cart;