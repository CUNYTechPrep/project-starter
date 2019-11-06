import React from 'react';
import './SearchResult.css';
import n from '../img/n.png';
import y from '../img/y.png';

class SearchResult extends React.Component {

    /**
     * PROPS
     * 
     * img
     * brand
     * name
     * check
     */

    selectCheckDisplay = () => {
        if (this.props.check)
            return y;
        else
            return n;
    }

    render() {
        return <div className="result-item">
            <img className="food-img" src={this.props.img} />
            <div className="text-wrapper">
                <span className="brand">{this.props.brand}</span>
                <span className="food-name">{this.props.name}</span>
            </div>
            <img className="check-img" src={this.selectCheckDisplay()} />
        </div>
    }
}

export default SearchResult;