import React from "react";

class SignUpPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      fN: "",
      lN: "",
      success: false,
    };
  }

  render() {
    return <h1 style={{ color: "white" }}>Sign up Page</h1>;
  }
}

export default SignUpPage;
