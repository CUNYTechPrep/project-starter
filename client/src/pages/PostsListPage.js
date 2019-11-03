import React from 'react';
import Loading from '../components/Loading';
import sally from '../assets/images/sally.png';
import ImageCard from '../components/ImageCard.js';

function User(props){
  return(
    <div className="user-card card">
    <div className="card-body">
    <div className="row">
      <div className="col-4">
        <img className="img-thumbnail img-responsive" src={sally} alt="sally's icon"/>
      </div>
      <div className="col-8">
        <h2>Sally Sue</h2>
        <p>Here is all the places I've been. Life is an adventure and I just capture it</p></div>
      </div>
    </div>
  </div>
  )
}


class PostsListPage extends React.Component {
  state = {
    posts: [],
    loading: true,
  }

  componentDidMount() {
    const id = 1;
    fetch("/api/trips/" + id)
      .then(res => res.json())
      .then(posts => {
        this.setState({
          loading: false,
          posts: posts.map((p,ii) => <ImageCard {...p} key={ii} />),
        });
      })
      .catch(err => console.log("API ERROR: ", err));
  }

  render() {
    if(this.state.loading) {
      return <Loading />;
    }

    return (
      <div className="container text-center">
        <User />
        <div className="row">
        { this.state.posts }
        </div>
      </div>
    );
  }
}

export default PostsListPage;