import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            className="nav-link"
            to="/MysticPixelGroup"
            activeclassname="active"
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            className="nav-link"
            to="/MysticPixelGroup/second"
            activeclassname="active"
          >
            Second
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
