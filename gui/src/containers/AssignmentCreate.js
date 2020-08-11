import React, { useState } from "react";
import Questions from "../components/Questions";
import { connect } from "react-redux";
import * as actions from "../store/actions/assignments";

const AssignmentCreate = (props) => {
  const [data, setData] = useState({
    title: "",
    answer: "",
  });

  const [choices, setChoices] = useState([]);
  const [questions, setQuestions] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();
    const name = e.target.name;
    name === "add_choice"
      ? setChoices((prevC) => {
          const id = prevC.length + 1;
          return [
            ...prevC,
            {
              id: id,
              label: `Choice ${id}`,
              name: `choice_${id}`,
            },
          ];
        })
      : setQuestions((prevQ) => {
          const id = prevQ.length + 1;
          return [
            ...prevQ,
            {
              id: id,
              label: `Question ${id}`,
              name: `question_${id}`,
            },
          ];
        });
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((prevData) => {
      return { ...prevData, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const submitquestions = [];
    for (let i = 0; i < questions.length; i++) {
      submitquestions.push({
        question: data[`question_${i + 1}`],
      });
      for (let j = 0; j < choices.length; j++) {
        const choice = `choice_${j + 1}_${i + 1}`;
        choice == undefined && submitquestions[i][choices].push(choice);
      }
      const answer = `answer_${i + 1}`;
      submitquestions[i].answer = data[answer];
    }
    // for (let i = 0; i < questions.length; i++) {
    //   console.log(questions[i]);
    // }
    console.log(submitquestions);
    console.log(data[`question_${1}`]);
    const asst = {};
    // props.createNewASST(props.token, asst);
  };

  return (
    <div>
      <form onSubmitCapture={handleSubmit}>
        <label>
          <h3>Assignment Title</h3>
          <input
            type="text"
            name="title"
            value={data.title}
            onChange={handleChange}
          />
        </label>
        <Questions
          handleChange={handleChange}
          data={data}
          choices={choices}
          questions={questions}
          handleClick={handleClick}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
  };
};

const mapDispatchToProps = (actions) => {
  return (dispatch) => {
    return {
      createNewASST: (token, asst) => dispatch(actions.createASST(token, asst)),
    };
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AssignmentCreate);
