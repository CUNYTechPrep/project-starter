import React, { Component } from 'react';
import Item from './Item';
import {Container, Row, Col} from 'react-bootstrap';
class ItemShelf extends Component{
    render() {
        const { items } = this.props;
        return(
            <div>
                <div>
                <ol className="horizontal">
                        {items.map(item => (
                            <div key={item.id}>
                                <Item
                                item={item}
                                />
                            </div>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default ItemShelf;
