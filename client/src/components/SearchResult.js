import React from 'react';
import './SearchResult.css';
import n from '../img/n.png';
import y from '../img/y.png';
import { timingSafeEqual } from 'crypto';

class SearchResult extends React.Component {

    /**
     * PROPS
     * 
     * img
     * id
     * brand //temp removed
     * name
     * check //removed
     * action
     */

    // selectCheckDisplay = () => {
    //     if (this.props.check)
    //         return y;
    //     else
    //         return n;
    // }

    constructor(props) {
        super(props);
        this.state = {
            'data-target': ""
        }
        this.initializeWarning();
    }

    initializeWarning = async () => {
        let response = await this.props.action(this.props.id);
        if (response) {
            this.setState({
                "data-target": "#good"
            })
        }
        else
            this.setState({
                "data-target": "#warning"
            })
        console.log("I've made it with ID: " + this.props.id + ". data-target state: " + this.state["data-target"]);
    }

    render() {
        return <div className="result-item" data-toggle="modal" data-target={this.state["data-target"]} onClick={(e) => {console.log("clicked")}}>
            <img className="food-img" src={this.props.img} />
            <div className="text-wrapper">
                <span className="brand">{this.props.brand}</span>
                <span className="food-name">{this.props.name}</span>
            </div>
            {/* <img className="check-img" src={this.selectCheckDisplay()} /> */}
        </div>
    }
}

export default SearchResult;