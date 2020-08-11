import React from "react";

export const Question = (props) => {
  return (
    <div className="list-card" style={{ minHeight: "10rem" }}>
      <h3>{props.title}</h3>
      <div className="choices">
        <ul>
          {props.choices.map((choice, n) => {
            return (
              <li key={n}>
                <p>{choice}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
