import React from 'react';
import Post from '../components/Post';
import Loading from '../components/Loading';
import Map from '../components/Map'
import "../styles/homePage.css"
import InputForm from '../components/InputForms'
import FilterRow from '../components/FilterOptions'

const HomePage = () => {
  /*state = {
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
  }*/
console.log(React.version);

  
  return(
    <div className="parent">
      <div className="leftSide">
        <InputForm/>
        <FilterRow/>
      </div>
      <div className="rightSide">
        <Map/>
      </div>
      
    </div>
  );
}

export default HomePage;