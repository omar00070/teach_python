import * as actionTypes from "./actionTypes";
import axios from "axios";

const getGradedASSTStart = () => {
  return {
    type: actionTypes.GET_GRADED_ASST_START,
  };
};

const getGradedASSTSuccess = (assignments) => {
  return {
    type: actionTypes.GET_GRADED_ASST_SUCCESS,
    assignments,
  };
};

const getGradedASSTFail = (error) => {
  return {
    type: actionTypes.GET_GRADED_ASST_FAIL,
    error,
  };
};

export const getGradedASST = (token, username) => {
  return (dispatch) => {
    dispatch(getGradedASSTStart());
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    };
    axios
      .get(`http://127.0.0.1:8000/api/graded/?username=${username}`)
      .then((res) => {
        const gradedASST = res.data;
        dispatch(getGradedASSTSuccess(gradedASST));
      })

      .catch((err) => {
        dispatch(getGradedASSTFail(err));
      });
  };
};

const createGradedASSTStart = () => {
  return {
    type: actionTypes.CREATE_GRADED_ASST_START,
  };
};

const createGradedASSTSuccess = () => {
  return {
    type: actionTypes.CREATE_GRADED_ASST_SUCCESS,
  };
};

const createGradedASSTFail = (error) => {
  return {
    type: actionTypes.CREATE_GRADED_ASST_FAIL,
    error,
  };
};

const createGradedASSTFinish = () => {
  return {
    type: actionTypes.CREATE_GRADED_ASST_FINISH,
  };
};

export const createGradedASST = (token, asst) => {
  return (dispatch) => {
    dispatch(createGradedASSTStart());
    console.log(asst);

    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    };
    axios
      .post("http://127.0.0.1:8000/api/graded/create/", asst)
      .then((res) => {
        dispatch(createGradedASSTSuccess());
      })
      .then((res) => {
        dispatch(createGradedASSTFinish());
      })
      .catch((err) => {
        dispatch(createGradedASSTFail(err));
      });
  };
};
