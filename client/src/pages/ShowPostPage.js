import React from 'react';
import Post from '../components/Post';
import Loading from '../components/Loading';
import { Redirect } from 'react-router-dom';

class ShowPostPage extends React.Component {
  state = {
    loading: true,
    post: null,
    notFound: false,
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    fetch("/api/posts/"+id)
      .then(res => res.json())
      .then(post => {
        this.setState({
          post: <Post {...post} />,
          loading: false,
        });
      })
      .catch(err => {
        this.setState({
          notFound: true,
        });
      });
  }


  render() {
    if(this.state.notFound) return <Redirect to="/" />;
    if(this.state.loading) return <Loading />;
    return this.state.post;
  }
}

export default ShowPostPage;