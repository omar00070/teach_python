import React from "react";
import "./containers.css";

export const SkillSection = (props) => {
  return (
    <div className="skill-section">
      <div className="container">
        <div className="skill-heading">
          <h1>These are The Skills That You Will Learn</h1>
          <p>From scratch to advanced python developer</p>
        </div>
        <div className="list-card">{props.children}</div>
      </div>
    </div>
  );
};
