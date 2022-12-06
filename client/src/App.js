import React from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import PostsListPage from "./pages/PostsListPage";
import TitleSearch from "./pages/TitleSearch";
import ShowPostPage from "./pages/ShowPostPage";
import AboutUsPage from "./pages/AboutUsPage";
import Details from "./pages/Details";
import LoginPage from "./pages/LoginPage";
import { AuthProvider } from "./context/AuthContext";
import AuthButton from "./components/AuthButton";

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
    </nav>
  );
}

function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
      <Navigation />
      <div className="container-xl text-center">
        <div className="row justify-content-center">
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/posts/new" element={<PostsListPage />} />
            <Route path="/posts/:id" element={<ShowPostPage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/" element={<TitleSearch />} />
            <Route path="/details/:id" element={<Details />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
