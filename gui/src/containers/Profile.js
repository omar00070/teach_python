import React from "react";
import { connect } from "react-redux";
const Profile = (props) => {
  return (
    <div>
      <h3>hello {props.username}</h3>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    username: state.auth.username,
  };
};
export default connect(mapStateToProps)(Profile);
