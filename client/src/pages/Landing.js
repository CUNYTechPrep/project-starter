import React from 'react';
import example from '../img/example.jpg';
import warning from '../img/warning.png';
import good from '../img/good.png';
import SearchResult from '../components/SearchResult.js';
import { NavLink } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import AllergenItems from "./AllergenItems";
import './SearchBar.css';
import ScanditBarcodeScanner from "scandit-sdk-react";
import {
  Barcode,
  ScanSettings
} from "scandit-sdk";


/**
 * Currently serves as example for SearchResult, feel free to replace
 */

class Landing extends React.Component {
  constructor(props) {
    super(props);

    let searchClicked = false;

    this.state = {
      items: [],
      products: [],
      searchValue: ""
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

  /* scanner functions */

  toggleScanner = () => {
    this.setState({
      scannerStatus: !this.state.scannerStatus
    })
  }

  getScanSettings = () => {
    return new ScanSettings({ enabledSymbologies: [Barcode.Symbology.EAN13, Barcode.Symbology.EAN8] });
  };


  /* product search functions */

  productSearch = async (searchQuery) => {
    await fetch("http://45.63.21.86:8000/api/search",
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "q": searchQuery
        })
      })
      .then((res) => res.json())
      .then((json) => {
        this.setState({ products: json });
        console.log(json)
      })
  }

  productCheck = async (productId) => {
    let result;

    //Workaround: build array from objects
    let allergies = [];
    this.state.items.forEach((element) => {
      allergies.push(element.text);
    })

    await fetch("http://45.63.21.86:8000/api/check",
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "id": productId,
          "allergies": allergies
        })
      })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        result = json.check
      })

    return result;

  }

  buildProductList = () => {
    let list = [];
    this.state.products.forEach((element) => {
      list.push(<SearchResult name={element.name} id={element.id} key={element.id} data-toggle="modal" data-target="#good" action={this.productCheck} />)
    })

    return list;
  }

  printSearchResult = () => {
    if (this.searchClicked) {
      if (this.state.items < 1) {
        this.searchClicked = false;
        return <div>
          <br /> {/*workaround */}
          Please enter at least 1 allergy
          </div>
      }
      else if (this.state.products.length > 0) {
        this.searchClicked = false;
        return <div className="productList">
          <h2 style={{ textAlign: 'center', marginTop: '5%' }}>Search Results</h2>
          {this.buildProductList()}
        </div>
      } else {
        this.searchClicked = false;
        return <div>
          <br /> {/*workaround */}
          No results found!
        </div>
      }
    }
  }

  render() {
    if (this.state.scannerStatus) {
      return <ScanditBarcodeScanner
        // Library licensing & configuration options (see https://docs.scandit.com/stable/web/globals.html#configure)
        licenseKey="AZUdGjVmK4B3QucR/ioDoeoESgdrQYvEM0oVOctvisziSEfBW32fhQ8TQNPSaRI54WjQKYAyT7TQKFnKUxDYwRBKB6zBRWZeM0NK17BkSueSMoKTjT8t5IMpk/Elw7cIz2saWO16PiiyqcDa5BO1ZgS3WpIGH+1CUIrtOOsesNcPDcPv4Vx+vlOeYS5uoDC71DniZK7EJp5KVWWnNNAdCeKLnnbYMCFoKRGuDT3VSNqBc8H/g026YdKif4nTRti6LVS0Bc26Ck6Ci3LcKrpSdBG/vaBRrQapNb77ArPgemasOpT2JiNszvo1hUUuCeenXHDd3f8m9ZPLxmY/XKScbrBJTvavj1kAJth01T9E6V++lENmBlN+WEqGvBV2OgPA7hH3v06C7xJ+nxKtWV0ocYgQysmDlH1U2hFGEwcwEOplGYpbu/Sl6n8M+/KaNup9yBtx0EV5bPYPcpForjd5D8KFsbLR2RG9gLIc37/y4trstamDY4//imAGqOzQkat3E7mD7lNRrJstxeAue9EYugopTIFo3dJza8LXBvmYK52NCoPTftxEBqm/fEvlyV9bzzVD7SpYn9P60cNTMFVIcpxt2o6ESRrtVkloj/+Rkbowl9pZCy6PSEcrEigns06NRWnSOi7ZB2+j1jG0+Ru0H44Xmd1ZPhWmQgHZmkfwjudNHj279uHlLFD5T3Ss0IQs8xSPDb16PxW35b7DbjEju8qscNchtXNZTQ+2XQBjCqSojgTpROlcm+9KulQxEm54Cb+YgWfn6lzenrW9EDgs6tnCn7A2PTQG1jT3"
        engineLocation="https://cdn.jsdelivr.net/npm/scandit-sdk@4.x/build" // could also be a local folder, e.g. "build"

        // Picker events
        onReady={() => this.setState({ scannerReady: true })}
        onScan={(e) => {
          this.toggleScanner();
          this.setState({
            searchValue: e.barcodes[0].data.substring(1)
          });
          this.searchClicked = true;
          this.productSearch(this.state.searchValue);
          console.log(this.state.scanUPC);
        }}
        onScanError={console.log}
        //lol
        // Picker options
        scanSettings={this.getScanSettings()}
      />
    } else {
      return (
        <div className="container">
          {
        /*
            
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
                <input type="text" class="form-control" placeholder="Product..." value={this.state.searchValue} onChange={
                  (e) => {
                    this.setState({
                      searchValue: e.target.value
                    })
                    console.log(this.state.searchValue);
                  }
                }></input>
                <button onClick={(e) => { this.toggleScanner() }}>Scan</button>
              </div>
            </div>
          </div>
          <div className="mt-4 allergenList">
            <div className="row justify-content-center">
              <div className="header">
                <form onSubmit={this.addItem}>
                  <input className="border border-success" ref={(a) => this._inputElement = a} placeholder="List Allergen"></input>
                  <button className="border border-success btn btn-dark" type="submit">add</button>
                </form>
              </div>
            </div>
            <div class="row justify-content-center">
              <AllergenItems entries={this.state.items} delete={this.deleteItem} />
            </div>
            <div id="check">
              {/*<NavLink exact to="/fuzzy-search"><span class="input-group-text bg-dark">Check <FaCheck style={{color:"#008000"}}/></span></NavLink> */}
              <button type="button" class="input-group-text bg-dark" onClick={(e) => {
                this.searchClicked = true;
                this.productSearch(this.state.searchValue);
              }}>Check <FaCheck style={{ color: "#008000" }} /></button>


              {/* data-toggle="modal" data-target="#good" */}
            </div>
          </div>

          {this.printSearchResult()}

          {/*WARNING Modal*/}
          <div class="modal fade" id="warning" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title w-100 text-center" id="exampleModalLongTitle">Warning</h1>
                </div>
                <div class="modal-body">
                  <div style={this.styleImg}>
                    <img src={warning} alt="WARNING" width={150} height={150} />
                  </div>
                  <h5 style={this.style} class="placeCenter"> This product will trigger a symptom of yours!</h5>
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
                    <img src={good} alt="GOOD" width={150} height={150} />
                  </div>
                  <h5 style={this.style} class="placeCenter"> This product will not trigger a symptom of yours!</h5>
                </div>
                <div class="modal-footer">
                  <button type="button" class="justify-content-center btn btn-success" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>


        </div >

      );
    }
  }
}

export default Landing;
