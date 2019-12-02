import React from 'react';
import Loading from '../components/Loading';
import Product from '../components/Product';



class PostsListPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      products: [],
      content: '',
      loading: true,
      isChecked:false,
    }
    this.handleChecked = this.handleChecked.bind(this);
  }
 
  componentDidMount() {
    console.log("component mount");
    fetch("/api/products")

      .then(res => res.json())

      .then(prod => {
        this.setState({
          loading: false,
          products: prod.map((p,ii) => <Product {...p} key={ii} />),
        },
        console.log("state saved"));

      })

      .catch(err => console.log("API ERROR: " , err));

  }
  contentChanged = (event) => {
    
    this.setState({
      content: event.target.value,
    }, () => {
     fetch("/api/products/"+this.state.content)
      
    .then(res => res.json())

    .then(prod => {
      this.setState({
        loading: false,
        products: prod.map((p,ii) => <Product {...p} key={ii} />),
       },
      console.log("state saved"));

    })

    .catch(err => console.log("API ERROR: " , err));
    
  });

    
  }
  handleChecked = ev =>{
    fetch("/api/products"+ev.currentTarget.value)

      .then(res => res.json())

      .then(prod => {
        if(prod[0]){
          console.log("amount is "+prod[0].amount);
        }
        this.setState({
          loading: false,
          products: prod.map((p,ii) => <Product {...p} key={ii} />),
         },
        console.log("state saved"));

      })

      .catch(err => console.log("API ERROR: " , err));
    }

  render() {
    if(this.state.loading) {
      return <Loading />;
    }

    return (
      <div style={{width:'100%'}}>  
      
        <div className="col-12 col-md-12 col-lg-12">
          <div className="input-group">
            <input 
              type="text" 
              placeholder="Search for a school product here" 
              value={this.state.content}
              className="form-control mr-3 rounded"
              onChange={this.contentChanged}
            />
          </div>
        <br></br>
      </div>


      <div  style={{display:'contents'}}>
          <div className='filter-category justify-content-left col-3 col-md-3 col-lg-2' style={{background:'#c0c0c0', height:'100%', float:'left',textAlign:'left', paddingTop:'10px', paddingBottom:'10px'}}>
            Catrgories:
              <br></br>
              <input type="radio" name="example" value="/category/electronics" onClick={this.handleChecked} style={{marginRight: '15px'}}/>
                Electronics
              <br></br>
              <input type="radio" name="example" value="/category/textbooks" onClick={this.handleChecked} style={{marginRight: '15px'}}/>
                Textbooks
              <br></br>
              <input type="radio" name="example"  value="/category/books"  onClick={this.handleChecked}  style={{marginRight: '15px'}}/>
                Books
              <br></br>
              <input type="radio" name="example" value="/category/class-notes"  onClick={this.handleChecked} style={{marginRight: '15px'}}/>
                Class Notes
              <br></br>
              <input type="radio" name="example" value="/category/arts-and-crafts" onClick={this.handleChecked} style={{marginRight: '15px'}}/>
                Arts &amp; Crafts
              <br></br>
              <input type="radio" name="example" value="/category/notebooks" onClick={this.handleChecked} style={{marginRight: '15px'}}/>
                Notebooks
              <br></br>
              <input type="radio" name="example" value="/category/bags" onClick={this.handleChecked} style={{marginRight: '15px'}}/>
                Bags
              <br></br>
              <input type="radio" name="example" value="/category/other" onClick={this.handleChecked} onClick={this.handleChecked} style={{marginRight: '15px'}}/>
                Other
              <br></br>
              <input type="radio" name="example" value=""  onClick={this.handleChecked}  style={{marginRight: '15px'}} defaultChecked/>
                Clear search filiters
              <br></br>
          </div>
        
          <div className="row justify-content-center col-9 col-md-9 col-lg-10" style={{marginLeft: '150px', marginRight: '50px' }}>
            {this.state.products}
          </div>

        </div>
      </div>
    );
  }
}

export default PostsListPage;

/*

import React from 'react';
import Post from '../components/Post';
import Loading from '../components/Loading';


class PostsListPage extends React.Component {
  state = {
    posts: [],
    loading: true,
  }

  componentDidMount() {
    fetch("/api/posts")
      .then(res => res.json())
      .then(posts => {
        this.setState({
          loading: false,
          posts: posts.map((p,ii) => <Post {...p} key={ii} />),
        });
      })
      .catch(err => console.log("API ERROR: ", err));
  }

  render() {
    if(this.state.loading) {
      return <Loading />;
    }

    return (
      <div className="container-fluid text-center">
        <div className="row justify-content-center">
          { this.state.posts }
        </div>
      </div>
    );
  }
}

export default PostsListPage;*/