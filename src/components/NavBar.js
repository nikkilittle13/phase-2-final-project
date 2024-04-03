import React from'react';
import { NavLink } from 'react-router-dom';
import "../index.css";

function NavBar() {
  return (
    <nav className='navbar'>
      <NavLink
      to="/"
      className="nav-link">
        Home
      </NavLink>
      <NavLink
      to="/artists"
      className="nav-link">
        Artists
      </NavLink>
      <NavLink
      to="/albums"
      className="nav-link">
        Albums
      </NavLink>
      <NavLink
      to="/submission"
      className="nav-link">
        Submission Form
      </NavLink>
    </nav>
  )
}

export default NavBar;