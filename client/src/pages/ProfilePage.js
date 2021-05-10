import React from "react";
import { Redirect } from "react-router-dom";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
const GAPIKEY = process.env.REACT_APP_GAPIKEY;
const mapURL =
  "https://maps.googleapis.com/maps/api/js?key=" +
  GAPIKEY +
  "&v=3.exp&libraries=geometry";

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      loading: true,
      notFound: false,
      groups: [],
      selectedGroup: 0,
    };
    this.handleGroupSelect = this.handleGroupSelect.bind(this);
  }
  handleGroupSelect(index) {
    console.log("selected group with index " + index);
    this.setState({
      selectedGroup: index,
    });
  }

  componentDidMount() {
    const { email } = this.props.match.params;
    fetch("/api/users/" + email)
      .then((res) => res.json())
      .then((ResUser) => {
        this.setState({
          user: ResUser,
        });
      })
      .catch((err) => {
        console.log("error found in retrieving user info");
        this.setState({
          notFound: true,
        });
      });
    fetch("/api/userGroups/" + email)
      .then((resGroups) => resGroups.json())
      .then((groups) => {
        this.setState({
          groups: groups,
          loading: false,
        });
      });
  }

  render() {
    const MapWithMarker = withScriptjs(
      withGoogleMap((props) => (
        <GoogleMap
          defaultZoom={11}
          defaultCenter={{ lat: 40.7074077, lng: -73.92179039999999 }}
        >
          <Marker
            label="some place"
            position={{ lat: 40.7074077, lng: -73.92179039999999 }}
          />
          <Marker
            label="some place2"
            position={{ lat: 40.7274077, lng: -73.91179039999999 }}
          />
        </GoogleMap>
      ))
    );

    if (this.state.notFound) return <Redirect to="/" />;
    else if (this.state.loading) return <h1>Loading</h1>;
    return (
      <>
        <div className="container-fluid">
          <div className="row justify-content-start">
            <div
              className="col-5 text-center"
              style={{ backgroundColor: "lightblue" }}
            >
              <h1>Welcome To Night Out</h1>
              <img
                src={this.state.user.profilePicture}
                alt="profilePic"
                style={{ height: "180px", borderRadius: "50%" }}
              ></img>
              <h4>
                {this.state.user.firstName} {this.state.user.lastName}
              </h4>
              <h3>Your Groups</h3>
              {this.state.groups.map((group, index) => {
                return (
                  <>
                    <input
                      onClick={() => this.handleGroupSelect(index)}
                      type="radio"
                      key={group.groupId}
                      name="group"
                    />
                    <p>{group.groupName}</p>
                  </>
                );
              })}
            </div>
            <div className="col" style={{ backgroundColor: "gray" }}>
              <div style={{ backgroundColor: "lightgreen", height: "auto" }}>
                <h1>GroupInfo</h1>
                {this.state.groups.map((group, index) => {
                  return (
                    <div
                      style={{
                        display:
                          index === this.state.selectedGroup
                            ? "inline"
                            : "none",
                      }}
                    >
                      <p>Group Name: {group.groupName}</p>
                      <h3>Members:</h3>
                      {group.members.map((member) => (
                        <p>{member} </p>
                      ))}
                      <h3>Places of interest</h3>
                      {group.places.map((placeId) => (
                        <p>{placeId} </p>
                      ))}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="row" style={{ height: "100%" }}>
            <MapWithMarker
              googleMapURL={mapURL}
              loadingElement={<div style={{ height: "100%", width: "100%" }} />}
              containerElement={
                <div style={{ height: "450px", width: "100%" }} />
              }
              mapElement={<div style={{ height: "100%", width: "100%" }} />}
            />
          </div>
        </div>
      </>
    );
  }
}

export default ProfilePage;
