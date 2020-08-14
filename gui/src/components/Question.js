import React from "react";

export const Question = (props) => {
  const name = props.order;
  return (
    <div className="list-card question-card" style={{ minHeight: "10rem" }}>
      <h4>Question {props.order}</h4>
      <div className="question-q">
        <p>{props.title}</p>
        <ul>
          {props.choices.map((choice, n) => {
            return (
              <li key={n}>
                <input
                  name={name}
                  id={`name_${n}`}
                  type="radio"
                  value={choice}
                  checked={props.values[name] === choice}
                  onChange={props.handleChange}
                />
                <label htmlFor={`name_${n}`}>{choice}</label>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
