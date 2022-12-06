import React from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import PostsListPage from "./pages/PostsListPage";
import PostFormPage from "./pages/PostFormPage";
import ShowPostPage from "./pages/ShowPostPage";
import AboutUsPage from "./pages/AboutUsPage";
import HomePage from "./pages/HomePage";
import logoImg from './asserts/logo.png';

import "./App.css";

function Navigation(props) {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow mb-3">
      <div className="container-fluid">
         <Link to="/">
            <img src={logoImg} alt="" />
          </Link>
        <ul className="navbar-nav me-auto">
          <li>
          <Link className="navbar-brand" to="/">
          Micro Blog
        </Link>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/posts/new">
              Create a Micro Post
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/home">
              Home Page
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about-us">
              About Us
            </NavLink>
          </li>
        </ul>
        </div>
        <div className="nt-app-header-profile-links">
          <div className="right">
            {
              profile ?
                <div className="nt-app-header-avatar" style={this.getAvatarStyle(profile)}>
                  <Link to="/profile" title={`profile: ${profile.username}`}/>
                </div>
                : null
            }
            <div className="log-container">
              {isLoggedIn ? <button onClick={this.logout.bind(this)} className="buttonLink logout">Log out</button> : <Link to="/login">Log in</Link>}
            </div>
            <div>
              {isLoggedIn ? null : <Link to="/signup">Sign up</Link>}
            </div>
            </div>
      </div>
    </nav>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <div className="container-xl text-center">
        <div className="row justify-content-center">
          <Routes>
            <Route path="/posts/new" element={<PostFormPage />} />
            <Route path="/posts/:id" element={<ShowPostPage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/" element={<PostsListPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
