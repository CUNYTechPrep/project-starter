import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  Link,
  NavLink
} from 'react-router-dom';
import ItemList from './components/ItemList';
import ItemDetail from './components/ItemDetail';
import './App.css';


class App extends React.Component {
  state = {
    items: [
      {
       id:1,
       name: "idears trucker jacket",
       imageLink: "https://cdn.shopify.com/s/files/1/0133/1907/7947/products/DENIM-07_1_1_900x.jpg?v=1634171742",
       price: 348,
       color: "vintage indigo",
       shelf: "jacket",
       sizes: ["xxs", "xs", "s", "m", "l", "xl", "xxl"],
       descriptions: ["100% cotton", "fits true to size with a dropped shoulder", "screenprint detailing throughout", "branded trims","imported" ],
       sizeChart: "https://cdn.shopify.com/s/files/1/0133/1907/7947/files/denim_trucker_jacket.jpg?v=1623357578"
      },
      {
        id:2,
        name: "mixed media jacket",
        imageLink: "https://cdn.shopify.com/s/files/1/0133/1907/7947/products/DENIM-03_1_1_900x.jpg?v=1634171769",
        price: 348,
        color: "natural",
        shelf: "jacket",
        sizes: ["xxs", "xs", "s", "m", "l", "xl", "xxl"]
      },
      {
        id:3,
        name: "mascot trucker jacket",
        imageLink: "https://cdn.shopify.com/s/files/1/0133/1907/7947/products/DENIM-11_1_1_900x.jpg?v=1634171755",
        price: 248,
        color: "stone wash",
        shelf: "jacket"
      },
      {
        id:4,
        name: "basic ss tee",
        imageLink: "https://cdn.shopify.com/s/files/1/0133/1907/7947/products/DENIM-03_1_1_900x.jpg?v=1634171769",
        price: 48,
        color: "heather grey",
        shelf: "tees"
      },
      {
        id:5,
        name: "idears tapered jean",
        imageLink: "https://cdn.shopify.com/s/files/1/0133/1907/7947/products/DENIM-09_1_1_900x.jpg?v=1634264772",
        price: 278,
        color: "vintage indigo",
        shelf: "bottom"
      },
      {
        id:6,
        name: "distressed tapered jean",
        imageLink: "https://cdn.shopify.com/s/files/1/0133/1907/7947/products/DENIM-06_1_1_900x.jpg?v=1634321500",
        price: 198,
        color: "vintage indigo",
        shelf: "bottom"
      },
      {
        id:7,
        name: "idears tapered jean",
        imageLink: "https://cdn.shopify.com/s/files/1/0133/1907/7947/products/DENIM-01_1_1_900x.jpg?v=1634264792",
        price: 278,
        color: "vintage indigo",
        shelf: "bottom"
      },
      {
        id:8,
        name: "carpenter jean",
        imageLink: "https://cdn.shopify.com/s/files/1/0133/1907/7947/products/DENIM-13_1_1_900x.jpg?v=1634264666",
        price: 198,
        color: "stone wash",
        shelf: "bottom"
      }
  ]
  }
  render() {
    const { items } = this.state;
    return (
      <div>
        <ItemList items={items} />
        {/* <ItemDetail id={8} items={items}/> */}
      </div>
    );
  }
}


export default App;
