import React from "react";

class GroupCreationPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
    };
  }

  componentDidMount() {
    const { email } = this.props.match.params;
    this.setState({
      email: email,
    });
  }
  render() {
    return (
      <h1 style={{ color: "white" }}>
        GroupCreationPage for {this.state.email}
      </h1>
    );
  }
}

export default GroupCreationPage;
