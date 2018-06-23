import * as types from '../constants/action-type';

let initialState = false;

let formReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.CONTROL_FORM:
      return !state;
    case types.CLOSE_FORM:
      return false;
    case types.OPEN_FORM:
      return true;
    default:
      return state;
  }
};

export default formReducer;