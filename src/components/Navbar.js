import React from "react";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="main-nav ">
      <h1>Jobarouter </h1>
      <div className="link_container">
        <NavLink to="/">Home </NavLink>
        <NavLink to="about">About us </NavLink>
        <NavLink to="help">Help </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
