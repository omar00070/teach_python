import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions/assignments";
import { Card } from "../components/Card";
import * as Styles from "./styles/assignments_styles";
import { Spinner } from "../components/Spinner";
import { Redirect } from "react-router-dom";

const AssignmentList = (props) => {
  useEffect(() => {
    props.token !== null && props.getAssignments(props.token, props.username);
  }, [props.token]);
  return (
    <>
      {/* {!props.isAuthenticated && <Redirect to={`login/`} />} */}

      <div className="ASST-section">
        <div className="container">
          <div
            className="list-card assignments-card"
            style={{ minHeight: "50vh" }}
          >
            <h1 style={Styles.headdingStyles}>Assignments</h1>
            {props.loading ? (
              <div className="spinner-div">
                <Spinner />
              </div>
            ) : (
              <div className="assignments">
                {props.assignments.length > 0 ? (
                  props.assignments.map((assignment) => {
                    return (
                      <Card
                        key={assignment.id}
                        title={assignment.title}
                        link={`/assignments/${assignment.id}`}
                      />
                    );
                  })
                ) : (
                  <h3>you dont have any assignments!</h3>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    assignments: state.assignments.assignments,
    token: state.auth.token,
    username: state.auth.username,
    isAuthenticated: state.auth.token !== null,
    loading: state.assignments.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAssignments: (token, username) =>
      dispatch(actions.getASST(token, username)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AssignmentList);
