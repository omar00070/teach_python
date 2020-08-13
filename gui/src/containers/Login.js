import React, { useState } from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions/auth";
import { AiOutlineUser } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link, Redirect } from "react-router-dom";
import { Spinner } from "../components/Spinner";

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

const Login = (props) => {
  const [values, setValues] = useState({ username: "", password: "" });

  const handleSubmit = (e, values) => {
    e.preventDefault();
    props.onAuth(values.username, values.password);
    // props.error === null && props.loading === false && props.isAuthenticated
    //   ? props.history.push(`/profile/${props.username}`)
    //   : console.log("non");
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
            <h2>User Login</h2>
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
                <RiLockPasswordLine style={iconStyles} className="login-icon" />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={values.passowrd}
                  onChange={handleChange}
                />
              </div>
              <button className="login-btn" type="submit">
                Log in
              </button>
              <br />
              <Link className="forgot-pass" to="#" style={{ padding: 0 }}>
                <p>Forgot your password?</p>
              </Link>
            </form>
            <div>
              <p>Not a member? </p>

              <Link
                className="signup-link"
                to="/register"
                style={{ padding: 0 }}
              >
                Signup Now
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
    username: state.auth.username,
    isAuthenticated: state.auth.token !== null,
    error: state.auth.error,
    loading: state.auth.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (username, password) =>
      dispatch(actions.authLogin(username, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
