import React, { useState } from "react";
import Choices from "./Choices";

const Questions = ({ handleChange, data, choices, questions, handleClick }) => {
  return (
    <>
      <div>
        {questions.map((question) => {
          const question_name = question.name;
          const question_id = question.id;
          return (
            <div key={question_id}>
              <label>
                <h3>{question.label}</h3>
                <input
                  name={question_name}
                  type="text"
                  onChange={handleChange}
                  value={data.question_name}
                />
              </label>
              <Choices
                choices={choices}
                handleChange={handleChange}
                data={data}
                question_id={question_id}
              />
              <label>
                <h3>Answer</h3>
                <input
                  name={`answer_${question_id}`}
                  type="text"
                  onChange={handleChange}
                  value={data[`answer_${question_id}`]}
                />
              </label>
              <button name="add_choice" onClick={handleClick}>
                Add Choice
              </button>
            </div>
          );
        })}
      </div>
      <button onClick={handleClick}>Add Question</button>
    </>
  );
};

export default Questions;
