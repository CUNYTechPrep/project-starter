import React from 'react';

function Navigation(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow mb-3">
                <a href="/Micro">Micro Blog</a>
                <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <a href="/posts/new">Create a Micro Post</a>
                </li>
                <li className="nav-item">
                    <a href="/about-us">About Us</a>
                </li>
                </ul>
            </nav>
        </div>
    );
  }

export default Navigation;