import React from 'react';
import Post from '../components/Post';
import Loading from '../components/Loading';
import User from '../components/User';
import Product from'../components/Product';

import Transaction from'../components/Transaction';
import { display } from '@material-ui/system';
//import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
//import '@trendmicro/react-sidenav/dist/react-sidenav.css';

//TODO: Display the contents for this account page. Lets say its user1 who is signed in.
// I will need to display one section for his personal info, name, email, school etc...
// Then I will need to display all of his transactions. In two parts what he has sold and what he has bought.
// Then display a list of all prdoucts he currently has for sale.

//I think I can split this into either 3 sub-pages or have one fragmented page where the user selectse what he wants to see A, B, or C
// and the content fragment will display the cooresponding infomation.
class AccountPage extends React.Component {
  state = {
    posts: <User userID = '3' username = 'user3' email = 'user3@email.com' password = 'test' />,
    products: [],
    user: [],
    seller: [],
    buyer: [],
    currentUserId: 1,
    loading: false,
  }


  componentDidMount() {
    console.log("component mount");
    fetch("/api/users/"+this.state.currentUserId)
      .then(res => res.json())

      .then(prod => {
        console.log("state saved");
        this.setState({
          loading: false, 
          content: prod.map((p,ii) => <User {...p} key={ii} />),
        },
        console.log("content " + this.state.content),
        );

      })

      .catch(err => console.log("API ERROR: " , err));  
  }



  
  showUser = ev =>{
    fetch("/api/users/"+this.state.currentUserId)
    .then(res => res.json())

    .then(prod => {
      console.log("state saved");
      this.setState({
        loading: false, 
        content: prod.map((p,ii) => <User {...p} key={ii} />),
       
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
      },
      );

    })

    .catch(err => console.log("API ERROR: products " , err));
  }
  showSoldProducts = ev => {
    fetch("/api/transactions/seller/"+this.state.currentUserId)
      .then(res => res.json())

      .then(prod => {
        console.log("state saved transaction");
        this.setState({
          loading: false, 
          content: prod.map((p,ii) => <Transaction {...p} key={ii} />),
        },
        );

      })

      .catch(err => console.log("API ERROR: transaction " , err));

  }
   showBoughtProducts = ev =>{
     
    fetch("/api/transactions/buyer/"+this.state.currentUserId)
    .then(res => res.json())

    .then(prod => {
      console.log("state saved transaction");
      this.setState({
        loading: false, 
        content: prod.map((p,ii) => <Transaction {...p} key={ii} />),
      },
      );

    })

    .catch(err => console.log("API ERROR: transaction " , err));
   }

  render() {
    if(this.state.loading) {
      return <Loading />;
    }

    return (
      
      <div style={{width:'100%'}}>  

      <span className="container-fluid text-center">
        
      <div  style={{display:'contents'}}>
          <div className='filter-category justify-content-left col-3 col-md-3 col-lg-2' style={{background:'#c0c0c0', height:'100%', float:'left',textAlign:'left', paddingTop:'10px', paddingBottom:'10px'}}>
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

          <div className="row justify-content-center col-9 col-md-9 col-lg-10" style={{marginLeft: '0px', marginRight: '50px' }}>
              {this.state.content}
              <hr color="#c7c34c" size="2" width="100%"></hr>
           
          </div>
       </div>
     
       </span>
      </div>
    );
  }
}

export default AccountPage;
