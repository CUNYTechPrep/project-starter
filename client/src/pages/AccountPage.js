import React from 'react';
import Loading from '../components/Loading';
import User from '../components/UserInfo';
import Product from'../components/Product';

import Transaction from'../components/Transaction';
import { display } from '@material-ui/system';
import cookie from "react-cookies";
class AccountPage extends React.Component {
  state = {
    content:[],
    currentUserName: cookie.load('username'),
    currentUserId: 1,
    loading: true,
  }


  componentDidMount() {
    console.log("component mount cookie is " + cookie.load('username'));
    fetch("/api/users/username/"+this.state.currentUserName)
      .then(res => res.json())

      .then(user => {
        console.log("state saved");
        this.setState({
          loading: false, 
          content: user.map((p,ii) => <User {...p} key={ii} />),
          currentUserId: user[0].userID,
          title: "Your user info is:"
        },
        console.log("content " + this.state.content),
        );

      })

      .catch(err => console.log("API ERROR: " , err));
  }


  showUser = ev =>{
    fetch("/api/users/"+this.state.currentUserId)
    .then(res => res.json())

    .then(user => {
      this.setState({
        loading: false, 
        content: user.map((p,ii) => <User {...p} key={ii} />),
        title: "Your user info is:"
      },
      console.log("content " + this.state.content),
      );

    })

    .catch(err => console.log("API ERROR: " , err));
  }


  showCurrentProducts = ev =>{
    fetch("/api/products/u/"+this.state.currentUserId)
    .then(res => res.json())

    .then(prod => {
      console.log("state saved products");
      this.setState({
        loading: false, 
        content: prod.map((p,ii) => <Product {...p} key={ii} />),
        title: "Your products currently on sale:"
      },
      );

    })

    .catch(err => console.log("API ERROR: products " , err));
  }

  showSoldProducts = ev => {
    fetch("/api/transactions/seller/"+this.state.currentUserId)
      .then(res => res.json())

      .then(trans => {
        console.log("state saved transaction" + this.state.content[0]);
        this.setState({
          loading: false, 
          content: trans.map((p,ii) => <Transaction {...p} key={ii} />),
          title: "Previous products you have sold:"
        },
        );

      })

      .catch(err => console.log("API ERROR: transaction " , err));

  }
   showBoughtProducts = ev =>{
     
    fetch("/api/transactions/buyer/"+this.state.currentUserId)
    .then(res => res.json())

    .then(trans => {
      console.log("state saved transaction" + this.state.content);
      this.setState({
        loading: false, 
        content: trans.map((p,ii) => <Transaction {...p} key={ii} />),
        title: "Previous products you have bought:"
      },
      );

    })

    .catch(err => console.log("API ERROR: transaction " , err));
   }

  render() {
      
    let errorMessage = null;
    if(this.state.loading) {
      return <Loading />;
    }
    else if (this.state.content[0] === undefined) {
      errorMessage = (
        <div className="alert alert-warning">
          "No relavent information to show"
        </div>
      );
    }

    return (
      
      <div style={{width:'100%'}}>  
        {errorMessage}
      <span className="container-fluid text-center">
       
      <div  style={{display:'contents'}}>
          <div className='filter-category justify-content-left col-3 col-md-3 col-lg-2' style={{background:'#c0c0c0', height:'fit-content', float:'left',textAlign:'left', paddingTop:'10px', paddingBottom:'10px'}}>
            Catrgories:
              <br></br>
              <input type="radio" name="example" value="users/" onClick={this.showUser} style={{marginRight: '15px'}} defaultChecked/>
                User Info
              <br></br>
              <input type="radio" name="example" value="/category/textbooks" onClick={this.showCurrentProducts} style={{marginRight: '15px'}}/>
                On Sale
              <br></br>
              <input type="radio" name="example"  value="/category/books"  onClick={this.showSoldProducts}  style={{marginRight: '15px'}}/>
                Products Sold
              <br></br>
              <input type="radio" name="example"  value="/category/books"  onClick={this.showBoughtProducts}  style={{marginRight: '15px'}}/>
                Products Bought
              <br></br>
          </div>

          <div>
              <h2>{this.state.title}</h2>
          </div>

          <div className="row justify-content-center col-sm-5 col-5 col-md-9 col-lg-10" style={{marginLeft: '0px', marginRight: '50px' }}>
           
              {this.state.content}
           
          </div>
       </div>
     
       </span>
      </div>
    );
  }
}

export default AccountPage;