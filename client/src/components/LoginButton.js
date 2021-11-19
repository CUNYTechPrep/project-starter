import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from 'react-router-dom';
const LoginButton = () => {
  const auth = useContext(AuthContext);
  const { isAuthenticated } = auth;
  return (!isAuthenticated && <Link className="btn btn-primary" to="/login">Log In</Link>);
};

export default LoginButton;