import React, { useState } from "react";
import Questions from "../components/Questions";
import { connect } from "react-redux";
import * as actions from "../store/actions/assignments";
import { produce } from "immer";

const AssignmentCreate = (props) => {
  const [data, setData] = useState({});
  const [questions, setQuestions] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const q_query = [];
    for (let i = 0; i < questions.length; i++) {
      const current_q = questions[i];
      const q_choices = [];
      for (let j = 0; j < current_q.choices.length; j++) {
        q_choices.push(data[`choice_${j + 1}_${i + 1}`]);
      }
      q_query.push({
        question: data[current_q.name],
        choices: q_choices,
        answer: data[`answer_${i + 1}`],
      });
    }
    const asst = {
      title: data.title,
      teacher: props.username,
      questions: q_query,
    };
    props.createNewASST(props.token, asst);
  };

  const handleClick = (e, qId) => {
    e.preventDefault();
    if (e.target.name === "add_question") {
      setQuestions((prevQ) => {
        const questionId = prevQ.length + 1;
        return [
          ...prevQ,
          {
            id: questionId,
            name: `question_${questionId}`,
            choices: [],
          },
        ];
      });
    } else if (e.target.name === "add_choice") {
      setQuestions((prevQ) => {
        const newQ = produce(prevQ, (copyQ) => {
          const choices = copyQ[qId - 1].choices;
          const choiceId = choices.length + 1;
          copyQ[qId - 1].choices.push({
            id: choiceId,
            name: `choice_${choiceId}_${qId}`,
          });
        });
        return newQ;
      });
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
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
    username: state.auth.username,
  };
};

const mapDispatchToProps = () => {
  return (dispatch) => {
    return {
      createNewASST: (token, asst) => dispatch(actions.createASST(token, asst)),
    };
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AssignmentCreate);
