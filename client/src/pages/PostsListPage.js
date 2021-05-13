import React from 'react';
import Postcard from '../components/Postcard';
import Loading from '../components/Loading';
import Mapview from '../components/Mapview';


class PostsListPage extends React.Component {
  state = {
    
    loading: true,
    posts: [],
  }

  componentDidMount() {
    fetch("/api/posts", {mode: 'same-origin'})
      .then(res => res.json())
      .then(posts => {
        this.setState({
          loading: false,
          posts: posts.map((p,ii) => <Postcard {...p} key={ii} />),
        });
      })
      .catch(err => console.log("API ERROR: ", err));
  }

  render() {
   /*  if(this.state.loading) {
      return <div>
                <Mapview /> 
                <Loading />
              </div>
        
    } */

    return (
      <div className="d-flex flex-column text-center justify-content-center">
        
          <Mapview />
          { this.state.posts }
        
      </div>
    );
  }
}

export default PostsListPage;