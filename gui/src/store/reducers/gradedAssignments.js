import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  assignments: [],
  loading: false,
  error: null,
};

const getGradedASSTStart = (state, action) => {
  return updateObject(state, {
    loading: true,
    error: null,
  });
};

const getGradedASSTSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    assignments: action.assignments,
    error: null,
  });
};

const getGradedASSTFail = (state, action) => {
  return updateObject(state, {
    loading: false,
    error: action.error,
  });
};

const createGradedASSTStart = (state, action) => {
  return updateObject(state, {
    loading: true,
    error: null,
  });
};

const createGradedASSTFail = (state, action) => {
  return updateObject(state, {
    loading: false,
    error: action.error,
  });
};

const createGradedASSTSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    error: null,
  });
};

const gradedASSTReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_GRADED_ASST_START:
      return getGradedASSTStart(state, action);
    case actionTypes.GET_GRADED_ASST_SUCCESS:
      return getGradedASSTSuccess(state, action);
    case actionTypes.GET_GRADED_ASST_FAIL:
      return getGradedASSTFail(state, action);
    case actionTypes.CREATE_GRADED_ASST_START:
      return createGradedASSTStart(state, action);
    case actionTypes.CREATE_GRADED_ASST_SUCCESS:
      return createGradedASSTSuccess(state, action);
    case actionTypes.CREATE_GRADED_ASST_FAIL:
      return createGradedASSTFail(state, action);
    default:
      return state;
  }
};

export default gradedASSTReducer;
