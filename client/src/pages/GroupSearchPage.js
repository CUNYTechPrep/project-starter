import React from "react";

class GroupSearchPage extends React.Component {
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
      <h1 style={{ color: "white" }}>GroupSearchPage for {this.state.email}</h1>
    );
  }
}

export default GroupSearchPage;
