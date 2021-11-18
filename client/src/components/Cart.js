import React, { Component, useState, useEffect } from "react";
import {Container, Row, Col, Card, Button} from 'react-bootstrap';
import ItemDetail from "./ItemDetail";
function Cart ( {items, cart, itemdelete} ) {

        const [cartitems, setcartitems]=useState([])
        useEffect (() =>{

        
        const cartitems=[];
        let total=0;
        for(let i = 0; i < cart.length; i++) {
            const item = items[cart[i].id];
            const itemInfo = {
                ...item,
                size: cart[i].size,
                quantity: cart[i].quantity,
                
            }
            cartitems.push(itemInfo)
            total+=item['price']
        }
        setcartitems(cartitems)
    }, [items, cart])

    const removeItem = (id , e) =>{
        itemdelete(id)
    }

    const handleChange = (id ,e ) =>{
        setcartitems({...cartitems, quantity:e.target.value})
    }
        
        return(
            <Container>
                
                <Row className="horizontal">
                 
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
                        
                        {cartitems.map( ( item ) => (
                        <Row>
                        
                            <Col className="flex"  xs={6} md={4}>
                                    <Card.Img variant="top" src={item['imageLink']} style={{width: '10rem'}}/>
                                <Col style={{marginTop: '50px'}} >
                                    <Card.Title ><b>{item['name']}</b></Card.Title>
                                    <Card.Text> xs </Card.Text>
                                    <Button onClick={(e) => removeItem(item.id , e)}> remove </Button>
                                </Col>
                                
                            </Col>
                                
                                <Col xs={6} md={4}>
                                    <input style={{marginLeft:'180px',marginTop: '50px',width:'40px'}} type="number" onChange={(e) => handleChange(item.id, e)} value={item.quantity} name="quantity" min="1" />
                                </Col>
                                
                                <Col xs={6} md={4}>
                                    <Card.Text style={{fontSize:'20px', fontWeight:'600',float:'right',marginTop: '50px'}}>${item['price']}</Card.Text>
                                </Col>
                            
                            </Row>
                        ))}
                    
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
                    <Card.Text style={{textAlign:'right', fontSize:'30px', fontWeight:'600' }}>$</Card.Text>
                    <div style={{}}>
                    <Button variant="secondary" size="lg" type="submit" style={{background:'#000000',color:'#FFFFFF', float:'right' }}>
                        CheckOut
                    </Button>
                    </div>
                </Card>
                
                </Row>
            </Container>
        )
    
}
export default Cart;