import React, { useState } from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions/auth";
import { Redirect } from "react-router-dom";
import { Spinner } from "../components/Spinner";

import { Link } from "react-router-dom";
import { AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";

const loginFieldStyles = {
  position: "relative",
};

const iconStyles = {
  position: "absolute",
  top: "50%",
  left: "7px",
  fontSize: "1.8rem",
  transform: "translateY(-50%)",
};

const Signup = (props) => {
  const [values, setValues] = useState({
    username: "",
    password1: "",
    password2: "",
    email: "",
  });

  const handleSubmit = (e, values) => {
    e.preventDefault();
    props.onAuth(
      values.username,
      values.email,
      values.password1,
      values.password2
    );
  };

  const handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;
    setValues((oldValues) => {
      return {
        ...oldValues,
        [name]: value,
      };
    });
  };

  // const onFinish = (values) => {
  //   console.log(
  //     "Received values of form: ",
  //     values.username,
  //     values.email,
  //     values.password,
  //     values.confirm
  //   );
  // };

  const raiseError = () => {
    if (props.error.message === "Request failed with status code 400") {
      return <p>invalid credintials</p>;
    } else {
      return <p>{props.error.message}</p>;
    }
  };

  return (
    <div
      className="login-page"
      style={{
        display: "flex",
        width: "100%",
        height: "80.5vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="login-box">
        {props.isAuthenticated && (
          <Redirect to={`/profile/${props.username}`} />
        )}

        {props.loading ? (
          <Spinner />
        ) : (
          <>
            <div className="error">{props.error !== null && raiseError()}</div>
            <h2>Sign Up</h2>
            <form onSubmitCapture={(e) => handleSubmit(e, values)}>
              <div className="form-item login" style={loginFieldStyles}>
                <AiOutlineUser style={iconStyles} className="login-icon" />
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={values.username}
                  onChange={handleChange}
                />
              </div>
              <div className="form-item password" style={loginFieldStyles}>
                <AiOutlineMail style={iconStyles} className="login-icon" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={values.passowrd}
                  onChange={handleChange}
                />
              </div>
              <div className="form-item password" style={loginFieldStyles}>
                <RiLockPasswordLine style={iconStyles} className="login-icon" />
                <input
                  type="password"
                  name="password1"
                  placeholder="Password"
                  value={values.passowrd}
                  onChange={handleChange}
                />
              </div>
              <div className="form-item password" style={loginFieldStyles}>
                <RiLockPasswordLine style={iconStyles} className="login-icon" />
                <input
                  type="password"
                  name="password2"
                  placeholder="Confirm Password"
                  value={values.passowrd}
                  onChange={handleChange}
                />
              </div>

              <button className="login-btn" type="submit">
                Register
              </button>
            </form>
            <div>
              <p>Already have an account? </p>

              <Link className="signup-link" to="/login" style={{ padding: 0 }}>
                Sign In
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    error: state.auth.error,
    isAuthenticated: state.auth.token !== null,
  };
};

const mapDispatchToprops = (dispatch) => {
  return {
    onAuth: (username, email, password1, password2) =>
      dispatch(actions.authSignUp(username, email, password1, password2)),
  };
};

export default connect(mapStateToProps, mapDispatchToprops)(Signup);
