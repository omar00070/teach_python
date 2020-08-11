import React from "react";
import { Link } from "react-router-dom";
import "./components.css";

export const NavItem = ({ name, linkTo, handleClick }) => {
  return (
    <div className="nav-item" onClick={handleClick}>
      <Link to={linkTo}>
        <h3>{name}</h3>
      </Link>
    </div>
  );
};
