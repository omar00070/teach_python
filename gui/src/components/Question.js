import React from "react";

export const Question = (props) => {
  const name = props.order;
  return (
    <div className="list-card" style={{ minHeight: "10rem" }}>
      <h4>Question {props.order}</h4>
      <h3>{props.title}</h3>
      <div className="choices">
        <ul>
          {props.choices.map((choice, n) => {
            return (
              <label key={n}>
                <input
                  name={name}
                  type="radio"
                  value={choice}
                  checked={props.values[name] === choice}
                  onChange={props.handleChange}
                />
                {choice}
              </label>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
