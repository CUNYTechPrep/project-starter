import PLACES_INFO from "../places.json";
import React from "react";
import { Redirect } from "react-router-dom";
import NavBar from "../components/NavBar";
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
      selectedGroupPlaces: [],
    };
    this.handleGroupSelect = this.handleGroupSelect.bind(this);
    this.getPlaceInfo = this.getPlaceInfo.bind(this);
  }
  handleGroupSelect(index) {
    console.log("selected group with index " + index);
    this.setState({
      selectedGroup: index,
    });
  }

  getPlaceInfo(place_id) {
    return PLACES_INFO.filter((place) => place.place_id === place_id)[0];
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
      })
      .then(() =>
        this.setState({
          selectedGroupPlaces:
            this.state.groups[this.state.selectedGroup].places,
        })
      )
      .then(() => console.log(this.state.selectedGroupPlaces));
  }

  render() {
    const MapWithMarker = withScriptjs(
      withGoogleMap((props) => (
        <GoogleMap
          defaultZoom={13}
          defaultCenter={{ lat: 40.7074077, lng: -73.92179039999999 }}
        >
          {this.state.groups[this.state.selectedGroup].places.map(
            (place_id, index) => {
              const placeInfo = this.getPlaceInfo(place_id);
              return (
                <Marker
                  key={place_id}
                  label={placeInfo.name}
                  position={{
                    lat: placeInfo.geometry.location.lat,
                    lng: placeInfo.geometry.location.lng,
                  }}
                />
              );
            }
          )}
        </GoogleMap>
      ))
    );

    if (this.state.notFound) return <Redirect to="/" />;
    else if (this.state.loading) return <h1>Loading</h1>;
    return (
      <>
        <NavBar user={this.state.user.email} />
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
                    <button
                      className="btn btn-dark btn-lg btn-block"
                      type="button"
                      onClick={() => this.handleGroupSelect(index)}
                      key={group.groupId}
                      name="group"
                    >
                      <p>{group.groupName}</p>
                    </button>
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
                      key={index}
                      style={{
                        display:
                          index === this.state.selectedGroup
                            ? "inline"
                            : "none",
                      }}
                    >
                      <p>Group Name: {group.groupName}</p>
                      <h3>Members:</h3>
                      {group.members.map((member, index) => (
                        <p key={index}>{member} </p>
                      ))}
                      <h3>Places of interest</h3>
                      {group.places.map((placeId, index) => (
                        <p key={index}>{placeId} </p>
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
