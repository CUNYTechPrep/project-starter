import React from 'react';
import example from '../img/example.jpg';
import SearchResult from '../components/SearchResult.js';
import {NavLink} from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import AllergenItems from "./AllergenItems";
import './SearchBar.css';


/**
 * Currently serves as example for SearchResult, feel free to replace
 */

class Landing extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addItem(e) {
    if (this._inputElement.value !== "") {
      var newItem = {
        text: this._inputElement.value,
        key: Date.now()
      };

      this.setState((prevState) => {
        return {
          items: prevState.items.concat(newItem)
        };
      });
    }

    this._inputElement.value = "";

    console.log(this.state.items);

    e.preventDefault();
  }

  deleteItem(key) {
    var filteredItems = this.state.items.filter(function (item) {
      return (item.key !== key)
    });

    this.setState({
      items: filteredItems
    });
  }

    render() {
        return (
          <div className="container">
            {/*
            <SearchResult img={example} brand="Unbranded" name="Apple" check={false}/>
            <SearchResult img={example} brand="Unbranded" name="Apple" check={true}/>

            // <div class="input-group-append">
            //
            // </div>


            */}
            <div className="row justify-content-center title">
              <h1>Check your Product</h1>
            </div>
            <div class="row justify-content-center">
              <div class="col-sm-6 col-md-6 col-lg-5 offset-md-4 ml-0 mt-3 border border-success pt-3 search">
                <div class="input-group mb-3">
                  <input type="text" class="form-control" placeholder="Product..."></input>
                </div>
              </div>
            </div>
            <div className="mt-4 allergenList">
              <div className="row justify-content-center">
                <div className="header">
                  <form onSubmit={this.addItem}>
                    <input  className="border border-success" ref={(a) => this._inputElement = a} placeholder="List Allergen"></input>
                    <button className="border border-success btn btn-dark" type="submit">add</button>
                  </form>
                </div>
              </div>
              <div class="row justify-content-center">
                <AllergenItems entries={this.state.items}
                               delete={this.deleteItem}/>
              </div>
              <div id="check">
                <NavLink exact to="/fuzzy-search"><span class="input-group-text bg-dark">Check <FaCheck style={{color:"#008000"}}/></span></NavLink>
              </div>
            </div>
          </div>

        );
    }
}

export default Landing;
