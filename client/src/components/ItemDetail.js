import React, { Component } from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
class ItemDetail extends Component {
    constructor(props){
        super(props)
        this.state = {
            quantity: "1",
            size: "xxs",
            item: {}
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit = (event,id) => {
        event.preventDefault();
        const {quantity, size} = this.state;
        // console.log(quantity, size);
        const itemInfo = {
            id,
            quantity,
            size
        }
        this.props.addToCart(itemInfo)
        this.setState({
            quantity: "1", 
            size: "xxs"})
    }

    handleChange = (event) => {
        const value= event.target.value;
        this.setState({
            [event.target.name]: value
        })
    }

    componentDidMount(){
        const { id } = this.props.match.params;
        fetch(`http://localhost:5000/product/${id}`)
        .then(res => res.json())
        .then(product => {
            this.setState({
                ...this.state,
                item: product
            })
        })
    }
    render() {
        const {quantity, size, item } = this.state;
        const imageLink = item.imageLink ? item.imageLink : null;
        return(
            
            <Container>
                <Row className="horizontal">
                    <Col md={12}lg={6}><img src={imageLink} alt={item.name} style={{width: '30rem'}}/></Col>
                    <Col md={6}lg={6}>
                    <div>
                        <h2><strong>{item.name}</strong></h2>
                        <h2><strong>{item.color}</strong></h2>
                        <h3>${item.price}</h3>
                        <div>
                            <form onSubmit={(event)=>this.handleSubmit(event, item.product_id)}>
                                {item.sizeAble && (
                                    <label>
                                    Pick your size:
                                    <select value={size} onChange={this.handleChange} name="size">
                                        <option value="xxs">xxs</option>
                                        <option value="xs">xs</option>
                                        <option value="s">s</option>
                                        <option value="m">m</option>
                                        <option value="l">l</option>
                                        <option value="xl">xl</option>
                                        <option value="xxl">xxl</option>
                                    </select>
                                </label>
                                )}

                                <label>
                                    Quantity:
                                    <input type="number" value={quantity} name="quantity" onChange={this.handleChange} min="1" />
                                </label>
                                <div className="d-grid gap-2 button">
                                    <Button variant="success" size="lg" type="submit">
                                        Add to Cart
                                    </Button>
                                </div>
                            </form>

                        </div>
                        <div>
                            <h3>Detail</h3>
                            <ul>
                                {item.description && item.description.map((d,idx) => (
                                    <li key={idx}>{d}</li>
                                ))}
                            </ul>
                        </div>
                        <hr bold="200"/>
                        <h3>check out the size & fit</h3>
                        <img src={item.sizeChart} alt="sizechart" style={{width: '20rem'}} />
                        <hr bold="200"/>
                    </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default ItemDetail;