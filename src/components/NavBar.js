import React from'react';
import { NavLink } from 'react-router-dom';
import "../index.css";

function NavBar() {
  return (
    <nav className='navbar'>
      <NavLink
      to="/"
      className="nav-link">
        HOME
      </NavLink>
      <NavLink
      to="/artists"
      className="nav-link">
        ARTISTS
      </NavLink>
      <NavLink
      to="/albums"
      className="nav-link">
        ALBUMS
      </NavLink>
      <NavLink
      to="/submission"
      className="nav-link">
        SUBMISSION FORM
      </NavLink>
    </nav>
  )
}

export default NavBar;