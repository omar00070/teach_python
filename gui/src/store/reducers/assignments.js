import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  assignments: [],
  assignmentDetail: { questions: [{ question: null, choices: [], id: null }] },
  loading: false,
  error: null,
  created: false,
};

const getASSTStart = (state, action) => {
  return updateObject(state, {
    loading: true,
    error: null,
    created: false,
  });
};

const getASSTSuccess = (state, actions) => {
  return updateObject(state, {
    assignments: actions.assignments,
    loading: false,
    error: null,
    created: false,
  });
};

const getASSTFail = (state, actions) => {
  return updateObject(state, {
    loading: false,
    error: actions.error,
    created: false,
  });
};

const getASSTDetailStart = (state, actions) => {
  return updateObject(state, {
    loading: true,
    error: null,
    created: false,
  });
};

const getASSTDetailSuccess = (state, actions) => {
  return updateObject(state, {
    loading: false,
    assignmentDetail: actions.assignmentDetail,
    error: null,
    created: false,
  });
};

const getASSTDetailFail = (state, actions) => {
  return updateObject(state, {
    loading: false,
    error: actions.error,
    created: false,
  });
};

const createASSTStart = (state, actions) => {
  return updateObject(state, {
    loading: true,
    error: null,
  });
};

const createASSTSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    error: null,
  });
};

const createASSTFail = (state, action) => {
  return updateObject(state, {
    loading: false,
    error: action.error,
  });
};

const assignmentReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case actionTypes.GET_ASST_START:
      return getASSTStart(state, actions);
    case actionTypes.GET_ASST_SUCCESS:
      return getASSTSuccess(state, actions);
    case actionTypes.GET_ASST_FAIL:
      return getASSTFail(state, actions);
    case actionTypes.GET_ASST_DETAIL_START:
      return getASSTDetailStart(state, actions);
    case actionTypes.GET_ASST_DETAIL_SUCCESS:
      return getASSTDetailSuccess(state, actions);
    case actionTypes.GET_ASST_DETAIL_FAIL:
      return getASSTDetailFail(state, actions);
    case actionTypes.CREATE_ASST_START:
      return createASSTStart(state, actions);
    case actionTypes.CREATE_ASST_SUCCESS:
      return createASSTSuccess(state, actions);
    case actionTypes.CREATE_ASST_FAIL:
      return createASSTFail(state, actions);
    default:
      return state;
  }
};

export default assignmentReducer;
