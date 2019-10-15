import React from 'react';
import Post from '../components/Post';
import Loading from '../components/Loading';
import { Redirect } from 'react-router-dom';

class ShowPostPage extends React.Component {
  state = {
    loading: true,
    post: null,
    notFound: false
  };

  async componentDidMount() {
    const { id } = this.props.match.params;
    try {
      const response = await fetch(`/api/posts/${id}`);
      const post = await response.json();
      this.setState({
        post: <Post {...post} />,
        loading: false
      });
    } catch (err) {
      this.setState({
        notFound: true
      });
    }
  }

  render() {
    if (this.state.notFound) return <Redirect to="/" />;
    if (this.state.loading) return <Loading />;
    return this.state.post;
  }
}

export default ShowPostPage;
