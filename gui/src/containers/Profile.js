import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getGradedASST } from "../store/actions/gradedAssignments";

const Profile = (props) => {
  useEffect(() => {
    props.isAuthorised && props.getGradedASSTs(props.token, props.username);
  }, [props.token]);

  return (
    <>
      {props.loding ? (
        "loading"
      ) : (
        <div>
          <h3>hello {props.username}</h3>
          {props.gradedASSTs.map((asst) => {
            return <h2 key={asst.id}>{asst.assignment}</h2>;
          })}
        </div>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.graded.loading,
    isAuthorised: state.auth.token !== null,
    token: state.auth.token,
    username: state.auth.username,
    gradedASSTs: state.graded.assignments,
  };
};

const mapDispatchToprops = (dispatch) => {
  return {
    getGradedASSTs: (token, username) =>
      dispatch(getGradedASST(token, username)),
  };
};

export default connect(mapStateToProps, mapDispatchToprops)(Profile);
