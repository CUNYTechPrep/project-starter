import React from "react";
import { Redirect } from "react-router-dom";

class ProfilePage extends React.Component {
  state = {
    user: null,
    loading: true,
    notFound: false,
    groups: [],
  };

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
                  <h3 key={index} style={{ backgroundColor: "green" }}>
                    {group.groupName} {group.groupId}
                  </h3>
                );
              })}
            </div>
            <div className="col" style={{ backgroundColor: "gray" }}>
              <div style={{ backgroundColor: "lightgreen", height: "48%" }}>
                <h1>GroupInfo</h1>
              </div>
              <div
                style={{
                  backgroundColor: "white",
                  height: "50%",
                  borderTop: "0px",
                  marginTop: "0px",
                  paddingTop: "0px",
                }}
              >
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
