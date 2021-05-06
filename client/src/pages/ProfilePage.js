import React from "react";
import { Redirect } from "react-router-dom";

class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      loading: true,
      notFound: false,
      groups: [],
      selectedGroup: -1,
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
    //console.log(this.props);
    fetch("/api/users/" + email)
      .then((res) => res.json())
      .then((ResUser) => {
        this.setState({
          user: ResUser,
          //loading: false,
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
              {/* <h2>email: {this.state.user.email}</h2> */}
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
                    {/* </input> */}
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
              <div>
                <h1>Map</h1>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ProfilePage;
