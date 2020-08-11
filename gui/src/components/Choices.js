import React from "react";

const Choices = ({ choices, data, handleChange, question_id }) => {
  return (
    <div>
      {choices.map((choice) => {
        const name = `${choice.name}_${question_id}`;
        return (
          <label style={{ display: "block" }} key={choice.id}>
            <h3>{choice.label}</h3>
            <input
              name={name}
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
