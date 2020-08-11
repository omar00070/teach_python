import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions/assignments";
import { Question } from "../components/Question";
const AssignmentDetail = (props) => {
  const id = props.match.params.id;
  useEffect(() => {
    props.token && props.getCurrent(props.token, id);
  }, [props.token, id]);
  return (
    <>
      <div className="list-card">
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
          {props.currentAssignment.questions !== undefined
            ? props.currentAssignment.questions.map((question) => {
                return (
                  <Question
                    title={question.question}
                    choices={question.choices}
                    key={question.id}
                  />
                );
              })
            : null}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    currentAssignment: state.assignments.assignmentDetail,
    token: state.auth.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCurrent: (token, id) => dispatch(actions.getASSTDetail(token, id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AssignmentDetail);
