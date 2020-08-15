import React from "react";
import "./containers.css";
import { Link } from "react-router-dom";

export const Banner = (props) => {
  return (
    <div className="banner">
      <div className="banner-container">
        <h2>Discover</h2>
        <h1>Python</h1>
        <p>Learn everyday and discover the uses of python.</p>
        <Link to="/assignments">
          <div className="btn">Join Now</div>
        </Link>
      </div>
    </div>
  );
};
