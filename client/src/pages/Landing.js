import React from 'react';
import example from '../img/example.jpg';
import warning from '../img/warning.png';
import good from '../img/good.png';
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

    this.style = {
       textAlign: 'center'
    };

    this.styleImg = {
      textAlign: 'center',
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
                <AllergenItems entries={this.state.items} delete={this.deleteItem}/>
              </div>
              <div id="check">
                {/*<NavLink exact to="/fuzzy-search"><span class="input-group-text bg-dark">Check <FaCheck style={{color:"#008000"}}/></span></NavLink> */}
                <button type="button" class="input-group-text bg-dark" data-toggle="modal" data-target="#good">Check <FaCheck style={{color:"#008000"}}/></button>
              </div>
            </div>

            {/*WARNING Modal*/}
            <div class="modal fade" id="warning" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title w-100 text-center" id="exampleModalLongTitle">Warning</h1>
                  </div>
                  <div class="modal-body">
                    <div style={this.styleImg}>
                      <img  src={warning} alt="WARNING" width={150} height={150}/>
                    </div>
                    <h5 style={this.style} class="placeCenter"> This product will trigger a syptom of yours!</h5>
                    <h5> Ingrediants: </h5>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="justify-content-center btn btn-danger" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>

            {/*Good Modal*/}
            <div class="modal fade" id="good" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title w-100 text-center" id="exampleModalLongTitle">Good To Go!</h1>
                  </div>
                  <div class="modal-body">
                    <div style={this.styleImg}>
                      <img src={good} alt="GOOD" width={150} height={150}/>
                    </div>
                    <h5 style={this.style} class="placeCenter"> This product will not trigger a syptom of yours!</h5>
                    <h5> Ingrediants: </h5>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="justify-content-center btn btn-success" data-dismiss="modal">Close</button>
                  </div>
                </div>
              </div>
            </div>


          </div>

        );
    }
}

export default Landing;
