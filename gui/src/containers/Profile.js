import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getGradedASST } from "../store/actions/gradedAssignments";
import { getASST } from "../store/actions/assignments";
import Grades from "../components/Grades";
import { Link, Route } from "react-router-dom";
import UserInfo from "../components/UserInfo";

const Profile = (props) => {
  useEffect(() => {
    if (props.isAuthorised) {
      props.getASSTs(props.token, props.username);
      props.getGradedASSTs(props.token, props.username);
    }
    console.log("rendered");
  }, [props.isAuthorised]);

  return (
    <div className="profile-container">
      <div className="upper-container"></div>
      <div className="lower-container">
        <div className="profile-info">
          <div className="image"></div>
          <h2>{props.username}</h2>
          <div className="info">
            <div>
              <Link to="/assignments/">
                <h3>Assignments</h3>
              </Link>
              <p>{props.assignmentsCount}</p>
            </div>
            <div>
              <Link>
                <h3>Completed</h3>
              </Link>
              <p>{props.gradedASSTs.length}</p>
            </div>
          </div>
        </div>
        <div className="profile-nav">
          <ul>
            <li>
              <Link to={`${props.match.url}/userinfo`}>
                <h3>Account</h3>
              </Link>
            </li>
            <li>
              <Link to={`${props.match.url}/grades`}>
                <h3>Grades</h3>
              </Link>
            </li>
          </ul>
        </div>
        <Route
          path="/profile/:id/grades"
          render={(rprops) => <Grades {...props} {...rprops} />}
        />
        <Route
          path="/profile/:id/userinfo"
          render={(rprops) => <UserInfo {...props} {...rprops} />}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.graded.loading,
    isAuthorised: state.auth.token !== null,
    token: state.auth.token,
    username: state.auth.username,
    gradedASSTs: state.graded.assignments,
    assignmentsCount: state.assignments.assignments.length,
    email: state.auth.email,
  };
};

const mapDispatchToprops = (dispatch) => {
  return {
    getGradedASSTs: (token, username) =>
      dispatch(getGradedASST(token, username)),
    getASSTs: (token, username) => dispatch(getASST(token, username)),
  };
};

export default connect(mapStateToProps, mapDispatchToprops)(Profile);
