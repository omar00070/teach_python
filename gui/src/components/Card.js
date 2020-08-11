import React from "react";
import { Link } from "react-router-dom";

export const Card = (props) => {
  return (
    <div className="card" style={{ margin: "1rem 0" }}>
      <Link to={props.link}>
        <h3>{props.title}</h3>
      </Link>
    </div>
  );
};
