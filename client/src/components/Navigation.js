import React, { Component } from "react"; 
import { Link, NavLink, Redirect } from 'react-router-dom';
class Navigation extends Component {
  state = {
    query: "",
    results: []
  }

  handleChange = (query) => {
    this.setState({query})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { query } = this.state;
    const filterItems = this.props.items && Object.keys(this.props.items).filter( (key)=>{
      const item = this.props.items[key];
      if (
        item.name.toLowerCase().includes(query) ||
        item.color.toLowerCase().includes(query) ||
        item.shelf.toLowerCase().includes(query)
      ) {
        return item;
      }
    })

    this.setState({
      query: "",
      results: filterItems
    })

  
    
    //redirect to /search pass filterItems, then display items on /search
  }
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand">Get<b>It</b></Link>  		
        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div id="navbarCollapse" className="collapse navbar-collapse justify-content-start">
          <div className="navbar-nav">
            <NavLink to="/" className="nav-item nav-link">Home</NavLink>
            <NavLink to="/about-us" className="nav-item nav-link">About</NavLink>			
            <div className="nav-item dropdown">
              <div  data-toggle="dropdown" className="nav-item nav-link dropdown-toggle">Closet</div>
              <div className="dropdown-menu">					
                <Link to="/products?shelf=jacket"className="dropdown-item">Jackets</Link>
                <Link to="/products?shelf=bottom" className="dropdown-item">Bottoms</Link>
                <Link to="/products?shelf=tee" className="dropdown-item">Tees</Link>
                <Link to="/products?shelf=other" className="dropdown-item">Other</Link>
                      </div>
                  </div>
            <Link to="/contact" className="nav-item nav-link">Contact</Link>
          </div>
          <form className="navbar-form form-inline">
            <div className="input-group query-box">								
              <input 
                type="text" 
                id="query" 
                className="form-control" 
                placeholder="Search here..." 
                onChange={(e) => this.handleChange(e.target.value.toLowerCase())}
                value={this.state.query} 
                />
              <div className="input-group-append" style={{marginLeft: "10px"}}>
                <span className="input-group-text">
                  <button className="btn btn-primary"  disabled={!this.state.query} onClick={(e) => this.handleSubmit(e)}>
                    <i className="material-icons">&#xE8B6;</i>
                  </button>
                </span>
              </div>
            </div>
          </form>
          {this.state.results.length > 0 &&
          <Redirect to={{
            pathname: '/search-results',
            state: { results: this.state.results }
          }}/>
        }
          <div className="navbar-nav ml-auto action-buttons">
              <Link to="/login" className="nav-link dropdown-toggle mr-4">Login</Link>
                      {/* <div className="dropdown-menu action-form">
                        <form action="/examples/actions/confirmation.php" method="post">
                          <p className="hint-text">Sign in with your social media account</p>
                          <div className="form-group social-btn clearfix">
                            <Link to="" className="btn btn-secondary facebook-btn float-left"><i className="fa fa-facebook"></i> Facebook</Link>
                            <Link to="" className="btn btn-secondary twitter-btn float-right"><i className="fa fa-twitter"></i> Twitter</Link>
                          </div>
                          <div className="or-seperator"><b>or</b></div>
                          <div className="form-group">
                            <input type="text" className="form-control" placeholder="Username" required="required" />
                          </div>
                          <div className="form-group">
                            <input type="password" className="form-control" placeholder="Password" required="required" />
                          </div>
                          <input type="submit" className="btn btn-primary btn-block" value="Login" />
                          <div className="text-center mt-2">
                            <Link to="">Forgot Your password?</Link>
                          </div>
                        </form>
                      </div> */}
              <Link to="/signup" className="btn btn-primary dropdown-toggle sign-up-btn">Sign up</Link>
                {/* <div className="dropdown-menu action-form">
                      <form action="/examples/actions/confirmation.php" method="post">
                        <p className="hint-text">Fill in this form to create your account!</p>
                        <div className="form-group">
                          <input type="text" className="form-control" placeholder="Username" required="required" />
                        </div>
                        <div className="form-group">
                          <input type="password" className="form-control" placeholder="Password" required="required" />
                        </div>
                        <div className="form-group">
                          <input type="password" className="form-control" placeholder="Confirm Password" required="required" />
                        </div>
                        <div className="form-group">
                          <label className="form-check-label"><input type="checkbox" required="required" /> I accept the <Link to="">Terms &amp; Conditions</Link></label>
                        </div>
                        <input type="submit" className="btn btn-primary btn-block" value="Sign up" />
                      </form>
                </div> */}
              <Link to="/checkout" className="nav-link dropdown-toggle mr-4">Cart</Link>
              {this.props.cart.length > 0 && (<span>{this.props.cart.length}</span>)}
          </div>
        </div>
      </nav>
  )
  }
}
export default Navigation;