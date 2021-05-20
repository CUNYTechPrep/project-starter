import PLACES_INFO from "../places.json";
import React from "react";
import { Redirect } from "react-router-dom";
import NavBar from "../components/NavBar";
import MemberDisplay from "../components/MemberDisplay";
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
      members: [],
      places: [],
    };
    this.handleGroupSelect = this.handleGroupSelect.bind(this);
    this.getPlaceInfo = this.getPlaceInfo.bind(this);
    this.getUserInfo = this.getUserInfo.bind(this);
  }
  handleGroupSelect(index) {
    console.log("selected group with index " + index);
    this.setState({
      selectedGroup: index,
      members: this.state.groups[index].members,
      places: this.state.groups[index].places,
    });
  }

  getPlaceInfo(place_id) {
    return PLACES_INFO.filter((place) => place.place_id === place_id)[0];
  }
  getUserInfo(email) {
    fetch("/api/users" + email);
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
          members: this.state.groups[this.state.selectedGroup].members,
          places: this.state.groups[this.state.selectedGroup].places,
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
              className="col-lg-3 col-md-4 col-sm-5 text-center"
              style={{ backgroundColor: "lightblue" }}
            >
              <img
                src={this.state.user.profilePicture}
                alt="profilePic"
                style={{ height: "100px", borderRadius: "50%" }}
              ></img>
              <p>
                {this.state.user.firstName} {this.state.user.lastName}
              </p>
              <p>Your Groups</p>
              {this.state.groups.map((group, index) => {
                return (
                  <>
                    <button
                      className="btn btn-secondary btn-sm btn-block"
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
              <div style={{ marginTop: "30px" }}>
                <div style={{ backgroundColor: "lightgreen", height: "auto" }}>
                  <p>
                    {this.state.groups[this.state.selectedGroup].groupName}{" "}
                    details
                  </p>
                  <h5>Members</h5>

                  <h5>Places of Interests</h5>
                  {this.state.places.map((pId) => {
                    const place = this.getPlaceInfo(pId);
                    return (
                      <p>
                        <span>
                          {this.getPlaceInfo(pId).name} : 0{" "}
                          <button>
                            <img
                              src="https://cdn4.iconfinder.com/data/icons/aiga-symbol-signs/581/aiga_uparrow_inv-512.png"
                              alt="upVote"
                              style={{ height: "15px" }}
                            ></img>
                          </button>
                        </span>
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>
            <div
              className="col-lg-9 col-md-8 col-sm-7"
              style={{ height: "900px" }}
            >
              <MapWithMarker
                googleMapURL={mapURL}
                loadingElement={
                  <div style={{ height: "100%", width: "100%" }} />
                }
                containerElement={
                  <div style={{ height: "900px", width: "100%" }} />
                }
                mapElement={<div style={{ height: "100%", width: "100%" }} />}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ProfilePage;
