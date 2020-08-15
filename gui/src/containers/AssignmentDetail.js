import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions/assignments";
import { Question } from "../components/Question";
import { createGradedASST } from "../store/actions/gradedAssignments";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Spinner } from "../components/Spinner";
import { Redirect } from "react-router-dom";

const AssignmentDetail = (props) => {
  const id = props.match.params.id;
  const questions = props.currentAssignment.questions;
  const [count, setCount] = useState(0);
  const [values, setValues] = useState({});

  useEffect(() => {
    props.token !== null && props.getCurrent(props.token, id);
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

  const handleSubmitLoading = () => {
    if (props.created) return <Redirect to="/" />;
    else return;
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
    // props.history.push("/");
  };
  return (
    <>
      <div className="ASST-section">
        <div className="container q-container">
          <div className="list-card assignments-card">
            {handleSubmitLoading()}
            {props.loading || props.submitLoading ? (
              <>
                <div className="q-loading">
                  <Spinner />
                </div>
              </>
            ) : (
              <form onSubmit={handleSubmit}>
                <div>
                  <div className="assignemnt-title">
                    <h3>{props.currentAssignment.title}</h3>
                  </div>
                  <div className="question-tracker">
                    <h5>{`${count + 1}/ ${questions.length}`}</h5>
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
                <div className="question-margin"></div>
                {count > 0 && (
                  <button
                    name="previous"
                    className="action-btn previous"
                    onClick={handleQuestions}
                  >
                    <FaArrowLeft className="icon" />
                  </button>
                )}
                {count + 1 < questions.length && (
                  <button
                    className="action-btn next"
                    name="next"
                    onClick={handleQuestions}
                  >
                    <FaArrowRight className="icon" />
                  </button>
                )}
                <div>
                  {count + 1 === questions.length && (
                    <button className="action-btn finish" type="submit">
                      Finish
                    </button>
                  )}
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    username: state.auth.username,
    currentAssignment: state.assignments.assignmentDetail,
    token: state.auth.token,
    loading: state.assignments.loading,
    submitLoading: state.graded.loading,
    created: state.graded.created,
    newCreated: state.assignments.created,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCurrent: (token, id) => dispatch(actions.getASSTDetail(token, id)),
    createGRADED: (token, asst) => dispatch(createGradedASST(token, asst)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AssignmentDetail);
