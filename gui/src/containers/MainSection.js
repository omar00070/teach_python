import React from "react";
import "./containers.css";

export const MainSection = (props) => {
  return (
    <div className="section">
      <div className="container">
        <div className="grid-heading">
          <h1>Most Effecient Way to Learn Python</h1>
          <p>Learn by working on projects and real world applications</p>
        </div>
        <div className="section-grid">{props.children}</div>
      </div>
    </div>
  );
};
