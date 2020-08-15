import * as actionTypes from "./actionTypes";
import axios from "axios";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSucess = (user) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    user: user,
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  };
};

export const logout = () => {
  localStorage.removeItem("user");
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};

export const checkAuthTimeout = (expirationTime) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
  };
};

export const authLogin = (username, password) => {
  return (dispatch) => {
    dispatch(authStart());
    axios
      .post("http://127.0.0.1:8000/rest-auth/login/", {
        username: username,
        password: password,
      })
      .then((res) => {
        console.log(res.data);
        const user = {
          token: res.data.key,
          username,
          userId: res.data.user,
          expirationDate: new Date(new Date().getTime() + 3600 * 1000),
        };
        localStorage.setItem("user", JSON.stringify(user));
        dispatch(authSucess(user));
        dispatch(checkAuthTimeout(3600));
      })
      .catch((err) => {
        dispatch(authFail(err));
      });
  };
};

export const authSignUp = (username, email, password1, password2) => {
  return (dispatch) => {
    dispatch(authStart());
    const user = { username, email, password1, password2 };
    axios
      .post("http://127.0.0.1:8000/rest-auth/registration/", user)
      .then((res) => {
        const user = {
          token: res.data.key,
          username,
          userId: res.data.user,
          expirationDate: new Date(new Date().getTime() + 3600 * 1000),
        };
        localStorage.setItem("user", JSON.stringify(user));
        dispatch(authSucess(user));
        dispatch(checkAuthTimeout(3600));
      })
      .catch((err) => {
        dispatch(authFail(err));
      });
  };
};

export const authCheckState = () => {
  return (dispatch) => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user === undefined || user == null) {
      dispatch(logout());
    } else {
      const expirationDate = new Date(user.expirationDate);
      if (expirationDate <= new Date()) {
        dispatch(logout());
      } else {
        dispatch(authSucess(user));
        dispatch(
          checkAuthTimeout(
            (expirationDate.getTime() - new Date().getTime()) / 1000
          )
        );
      }
    }
  };
};
