import React from 'react';
import GoogleMapReact from 'google-map-react';
import ImageCard from '../components/ImageCard.js';

const AnyReactComponent = ({ icon }) => <div><img style={{ width: '5em', height: '5em', border:'1px solid white' }} src={icon} /></div>;

class Map extends React.Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
  //   let lat = this.props.posts[0].props.coverlat
  //   let lng = this.props.posts[0].props.coverlng

    let markers = this.props.posts.map((obj) => <AnyReactComponent
        lat={obj.props.coverlat}
        lng={obj.props.coverlng}
        icon={obj.props.coverphoto}
      />)
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '50vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'api key here' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
        {console.log("markers", markers)}
        {markers}
        </GoogleMapReact>
      </div>
    );
  }
}

class MapPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      loading: true,
      user: undefined,
    }
    this.callUser()
  }

  callUser(){
    fetch("/api/users/")
    .then(res => res.json())
    .then(user => {
      this.setState({user: user});
    })
    .catch(err => console.log("API ERROR: ", err));
  }
  componentDidMount() {
    const id = 1;
    fetch("/api/trips/" + id)
      .then(res => res.json())
      .then(posts => {
        this.setState({
          loading: false,
          posts: posts.map((p,ii) => <ImageCard {...p} key={ii} src={p.coverphoto}/>),
        });
      })
      .catch(err => console.log("API ERROR: ", err));
  }

  render() {
    return(
      <div>
        <Map posts = { this.state.posts }/>
        { this.state.posts }
      </div>
    )
  }
}


export default MapPage;