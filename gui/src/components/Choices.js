import React from "react";

const Choices = ({ choices, data, handleChange, question_id }) => {
  return (
    <div>
      {choices.map((choice, i) => {
        return (
          <label style={{ display: "block" }} key={choice.id}>
            <h3>Choice {i + 1}</h3>
            <input
              name={choice.name}
              type="text"
              value={data.name}
              onChange={handleChange}
            />
          </label>
        );
      })}
    </div>
  );
};

export default Choices;
