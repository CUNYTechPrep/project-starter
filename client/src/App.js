import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
} from 'react-router-dom';
import ItemList from './components/ItemList';
import ItemDetail from './components/ItemDetail';
import './App.css';
import Navigation from './components/Navigation';
import ItemsByShelf from './components/ItemsByShelf';
import SearchResults from './components/SearchResults';
class App extends React.Component {

  state = {
    cart: [],
    items: {
      "8xf0y6ziyjabvozdd253nd": {
         id: "8xf0y6ziyjabvozdd253nd",
         name: "idears trucker jacket",
         imageLink: "https://cdn.shopify.com/s/files/1/0133/1907/7947/products/DENIM-07_1_1_900x.jpg?v=1634171742",
         price: 348,
         color: "vintage indigo",
         shelf: "jacket",
         sizes: ["xxs", "xs", "s", "m", "l", "xl", "xxl"],
         descriptions: ["100% cotton", "fits true to size with a dropped shoulder", "screenprint detailing throughout", "branded trims","imported" ],
         sizeChart: "https://cdn.shopify.com/s/files/1/0133/1907/7947/files/denim_trucker_jacket.jpg?v=1623357578",
         sizeAble: true
        },
        "5c9qojr2d1738zlx09afby": {
          id: "5c9qojr2d1738zlx09afby",
          name: "mixed media jacket",
          imageLink: "https://cdn.shopify.com/s/files/1/0133/1907/7947/products/DENIM-03_1_1_900x.jpg?v=1634171769",
          price: 348,
          color: "natural",
          shelf: "jacket",
          sizes: ["xxs", "xs", "s", "m", "l", "xl", "xxl"],
          descriptions: ["100% cotton", "fits true to size with a dropped shoulder", "screenprint detailing throughout", "branded trims","imported" ],
          sizeChart: "https://cdn.shopify.com/s/files/1/0133/1907/7947/files/denim_trucker_jacket.jpg?v=1623357578",
          sizeAble: true
        },
        "5c9qojr2d1738zlx09afba": {
          id:"5c9qojr2d1738zlx09afba",
          name: "mascot trucker jacket",
          imageLink: "https://cdn.shopify.com/s/files/1/0133/1907/7947/products/DENIM-11_1_1_900x.jpg?v=1634171755",
          price: 248,
          color: "stone wash",
          shelf: "jacket",
          descriptions: ["100% cotton", "fits true to size with a dropped shoulder", "screenprint detailing throughout", "branded trims","imported" ],
          sizeChart: "https://cdn.shopify.com/s/files/1/0133/1907/7947/files/denim_trucker_jacket.jpg?v=1623357578",
          sizeAble: true
        },
        "6c9qojr2d1738zlx09afby": {
          id:"6c9qojr2d1738zlx09afby",
          name: "basic ss tee",
          imageLink: "https://cdn.shopify.com/s/files/1/0133/1907/7947/products/TRUCKER-159_1_900x.jpg?v=1631209823",
          price: 48,
          color: "heather grey",
          shelf: "tee",
          descriptions: ["100% cotton", "fits true to size with a dropped shoulder", "screenprint detailing throughout", "branded trims","imported" ],
          sizeChart: "https://cdn.shopify.com/s/files/1/0133/1907/7947/files/denim_trucker_jacket.jpg?v=1623357578",
          sizeAble: true
        },
        "5c9qojr2d1738zlx09afay": {
          id: "5c9qojr2d1738zlx09afay",
          name: "idears tapered jean",
          imageLink: "https://cdn.shopify.com/s/files/1/0133/1907/7947/products/DENIM-09_1_1_900x.jpg?v=1634264772",
          price: 278,
          color: "vintage indigo",
          shelf: "bottom",
          descriptions: ["100% cotton", "fits true to size with a dropped shoulder", "screenprint detailing throughout", "branded trims","imported" ],
          sizeChart: "https://cdn.shopify.com/s/files/1/0133/1907/7947/files/denim_trucker_jacket.jpg?v=1623357578",
          sizeAble: true
        },
        "5d9qojr2d1738zlx09afby": {
          id:"5d9qojr2d1738zlx09afby",
          name: "distressed tapered jean",
          imageLink: "https://cdn.shopify.com/s/files/1/0133/1907/7947/products/DENIM-06_1_1_900x.jpg?v=1634321500",
          price: 198,
          color: "vintage indigo",
          shelf: "bottom",
          descriptions: ["100% cotton", "fits true to size with a dropped shoulder", "screenprint detailing throughout", "branded trims","imported" ],
          sizeChart: "https://cdn.shopify.com/s/files/1/0133/1907/7947/files/denim_trucker_jacket.jpg?v=1623357578",
          sizeAble: true
        },
        "5c9q1jr2d1738zlx09afby": {
          id:"5c9q1jr2d1738zlx09afby",
          name: "idears tapered jean",
          imageLink: "https://cdn.shopify.com/s/files/1/0133/1907/7947/products/DENIM-01_1_1_900x.jpg?v=1634264792",
          price: 278,
          color: "vintage indigo",
          shelf: "bottom",
          descriptions: ["100% cotton", "fits true to size with a dropped shoulder", "screenprint detailing throughout", "branded trims","imported" ],
          sizeChart: "https://cdn.shopify.com/s/files/1/0133/1907/7947/files/denim_trucker_jacket.jpg?v=1623357578",
          sizeAble: true
        },
        "5c9qojr2d1738zlx09a1by": {
          id:"5c9qojr2d1738zlx09a1by",
          name: "carpenter jean",
          imageLink: "https://cdn.shopify.com/s/files/1/0133/1907/7947/products/DENIM-13_1_1_900x.jpg?v=1634264666",
          price: 198,
          color: "stone wash",
          shelf: "bottom",
          descriptions: ["100% cotton", "fits true to size with a dropped shoulder", "screenprint detailing throughout", "branded trims","imported" ],
          sizeChart: "https://cdn.shopify.com/s/files/1/0133/1907/7947/files/denim_trucker_jacket.jpg?v=1623357578",
          sizeAble: true
        },
        "5c9qojr2d1738zlx09a123": {
          id:"5c9qojr2d1738zlx09a123",
          name: "riverside tote",
          imageLink: "https://cdn.shopify.com/s/files/1/0133/1907/7947/products/5D3A60212_900x.jpg?v=1632355408",
          price: 118,
          color: "golden yellow",
          shelf: "accessory",
          descriptions: ["100% cotton", "fits true to size with a dropped shoulder", "screenprint detailing throughout", "branded trims","imported" ],
          sizeChart: "https://cdn.shopify.com/s/files/1/0133/1907/7947/files/denim_trucker_jacket.jpg?v=1623357578",
          sizeAble: false
        },
        "abcqojr2d1738zlx09a123": {
          id:"abcqojr2d1738zlx09a123",
          name: "hearty snapback hat",
          imageLink: "https://cdn.shopify.com/s/files/1/0133/1907/7947/products/TRUCKER-174_900x.jpg?v=1630883679",
          price: 58,
          color: "black",
          shelf: "accessory",
          descriptions: ["100% cotton", "fits true to size with a dropped shoulder", "screenprint detailing throughout", "branded trims","imported" ],
          sizeChart: "https://cdn.shopify.com/s/files/1/0133/1907/7947/files/denim_trucker_jacket.jpg?v=1623357578",
          sizeAble: false
        },
        "abccbar2d1738zlx09a123": {
          id:"abccbar2d1738zlx09a123",
          name: "hearty snapback hatmascot drew house",
          imageLink: "https://cdn.shopify.com/s/files/1/0133/1907/7947/products/UnoFlats-26_900x.jpg?v=1633541538",
          price: 38,
          color: "royal blue",
          shelf: "accessory",
          descriptions: ["100% cotton", "fits true to size with a dropped shoulder", "screenprint detailing throughout", "branded trims","imported" ],
          sizeChart: "https://cdn.shopify.com/s/files/1/0133/1907/7947/files/denim_trucker_jacket.jpg?v=1623357578",
          sizeAble: false
        },
        "abccbar2d1738zlx09aqwe": {
          id:"abccbar2d1738zlx09aqwe",
          name: "mascot foot bag",
          imageLink: "https://cdn.shopify.com/s/files/1/0133/1907/7947/products/MASCOTHACKYSACK_DETAIL_900x.jpg?v=1623200262",
          price: 8,
          color: "golden yellow",
          shelf: "accessory",
          descriptions: ["100% cotton", "fits true to size with a dropped shoulder", "screenprint detailing throughout", "branded trims","imported" ],
          sizeChart: "https://cdn.shopify.com/s/files/1/0133/1907/7947/files/denim_trucker_jacket.jpg?v=1623357578",
          sizeAble: false
        },
    }
  }

  addToCart = (item) => {
    this.setState({
      cart: [...this.state.cart, item]
    })
  }

  render() {
    const { items, cart } = this.state;
    return (
          <Router>
            <div className="header">
              <Navigation items={items} cart={cart}/>
            </div>
            <Switch>
              <Route exact path="/" render={(props) => (
                <ItemList {...props} items={items} />
              )} 
              />
              <Route  path="/products/:id" render={(props) => (
                <ItemDetail {...props} items={items} addToCart={(itemInfo) => this.addToCart(itemInfo)}/>
              )} 
              />
              <Route path="/products" render={(props) => (
                <ItemsByShelf {...props} items={items} />
              )}
              />
              <Route path="/search-results" render={(props) => (
                <SearchResults {...props} items={items} />
              )}
              />
              {/* <Route exact path="/aboutus" component={AboutUsPage} /> */}
            </Switch>
        </Router>
    );
  }
}


export default App;
