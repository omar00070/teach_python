import * as actionTypes from "./actionTypes";
import axios from "axios";

const getASSTStart = () => {
  return {
    type: actionTypes.GET_ASST_START,
  };
};

const getASSTFail = (error) => {
  return {
    type: actionTypes.GET_ASST_FAIL,
    error,
  };
};

const getASSTSucess = (assignments) => {
  return {
    type: actionTypes.GET_ASST_SUCCESS,
    assignments,
  };
};

export const getASST = (token) => {
  return (dispatch) => {
    dispatch(getASSTStart());
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    };
    axios
      .get("http://127.0.0.1:8000/api/assignments/")
      .then((res) => {
        const assignments = res.data;
        dispatch(getASSTSucess(assignments));
      })
      .catch((err) => {
        dispatch(getASSTFail(err));
      });
  };
};

const getASSTDetailStart = () => {
  return {
    type: actionTypes.GET_ASST_DETAIL_START,
  };
};

const getASSTDetailFail = (error) => {
  return {
    type: actionTypes.GET_ASST_DETAIL_FAIL,
    error,
  };
};

const getASSTDetailSuccess = (assignmentDetail) => {
  return {
    type: actionTypes.GET_ASST_DETAIL_SUCCESS,
    assignmentDetail,
  };
};

export const getASSTDetail = (token, id) => {
  return (dispatch) => {
    dispatch(getASSTDetailStart());
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    };
    axios
      .get(`http://127.0.0.1:8000/api/assignments/${id}/`)
      .then((res) => {
        const assignmentDetail = res.data;
        dispatch(getASSTDetailSuccess(assignmentDetail));
      })
      .catch((error) => {
        dispatch(getASSTDetailFail(error));
      });
  };
};

const createASSTStart = () => {
  return {
    type: actionTypes.CREATE_ASST_START,
  };
};

const createASSTSuccess = () => {
  return {
    type: actionTypes.CREATE_ASST_SUCCESS,
  };
};

const createASSTFail = (error) => {
  return {
    type: actionTypes.CREATE_ASST_FAIL,
    error,
  };
};

export const createASST = (token, asst) => {
  return (dispatch) => {
    dispatch(createASSTStart());
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`,
    };
    axios
      .post("http://127.0.0.1:8000/api/assignments/", asst)
      .then((res) => {
        dispatch(createASSTSuccess());
      })
      .catch((err) => {
        dispatch(createASSTFail(err));
      });
  };
};
