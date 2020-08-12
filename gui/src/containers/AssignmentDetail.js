import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions/assignments";
import { Question } from "../components/Question";
import { createGradedASST } from "../store/actions/gradedAssignments";

const AssignmentDetail = (props) => {
  const id = props.match.params.id;
  const questions = props.currentAssignment.questions;
  const [count, setCount] = useState(0);
  const [values, setValues] = useState({});

  useEffect(() => {
    props.token && props.getCurrent(props.token, id);
  }, [props.token, id]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues((oldValues) => {
      return {
        ...oldValues,
        [name]: value,
      };
    });
  };

  const handleQuestions = (e) => {
    e.preventDefault();
    if (e.target.name === "next") {
      if (count + 1 < questions.length) {
        setCount(count + 1);
      } else {
        return;
      }
    }
    if (e.target.name === "previous") {
      if (count - 1 >= 0) {
        setCount(count - 1);
      } else {
        return;
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const asst = {
      answers: values,
      student: props.username,
      asstID: props.currentAssignment.id,
    };
    console.log(asst);
    props.createGRADED(props.token, asst);
    props.history.push("/");
  };
  return (
    <>
      <div className="list-card">
        <form onSubmit={handleSubmit}>
          <div>
            <div
              style={{
                borderBottom: "1px solid black",
                margin: "1rem 0",
              }}
            >
              <h3
                style={{
                  marginBottom: "2rem",
                }}
              >
                {props.currentAssignment.title}
              </h3>
            </div>

            <Question
              title={questions[count].question}
              choices={questions[count].choices}
              key={questions[count].id}
              order={questions[count].order}
              handleChange={handleChange}
              values={values}
            />
          </div>
          <div>
            {count > 0 && (
              <button name="previous" onClick={handleQuestions}>
                Previous
              </button>
            )}

            <button name="next" onClick={handleQuestions}>
              Next
            </button>
          </div>
          <div>
            {count + 1 === questions.length && (
              <button type="submit">Finish</button>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    username: state.auth.username,
    currentAssignment: state.assignments.assignmentDetail,
    token: state.auth.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCurrent: (token, id) => dispatch(actions.getASSTDetail(token, id)),
    createGRADED: (token, asst) => dispatch(createGradedASST(token, asst)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AssignmentDetail);
