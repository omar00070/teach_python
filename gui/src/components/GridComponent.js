import React from "react";

export const GridComponent = (props) => {
  return (
    <div className="grid-item">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
};
