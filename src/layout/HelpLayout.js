import React from "react";
import { Outlet, NavLink } from "react-router-dom";

const HelpLayout = () => {
  return (
    <div className="help-layout">
      <h3>Help page</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        voluptatem non obcaecati magnam voluptatum aut?
      </p>

      <nav className="help_nav">
        <NavLink to="faq">FAQ</NavLink>
        <NavLink to="contact">Contact us</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default HelpLayout;
