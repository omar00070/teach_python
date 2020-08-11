import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions/assignments";
import { Card } from "../components/Card";
import * as Styles from "./styles/assignments_styles";

const AssignmentList = (props) => {
  useEffect(() => {
    props.token !== null && props.getAssignments(props.token);
  }, [props.token]);
  return (
    <>
      {props.assignments === null ? null : (
        <div className="ASST-section">
          <div className="container">
            <div className="list-card" style={{ minHeight: "50vh" }}>
              <h1 style={Styles.headdingStyles}>Assignments</h1>
              {props.assignments.map((assignment) => {
                return (
                  <Card
                    key={assignment.id}
                    title={assignment.title}
                    link={`/assignments/${assignment.id}`}
                  />
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    assignments: state.assignments.assignments,
    token: state.auth.token,
    username: state.auth.username,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAssignments: (token) => dispatch(actions.getASST(token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AssignmentList);
