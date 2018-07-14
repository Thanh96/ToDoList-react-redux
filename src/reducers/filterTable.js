import * as types from '../constants/action-type';

let initialState = {};

let filterReducer = (state = initialState, action) => {
  switch(action.type) {
    case types.FILTER_TABLE:
      state.text = action.filter.selectText;
      state.sort = action.filter.sort;
      return state;
    default:
      return state;
  }
};

export default filterReducer;