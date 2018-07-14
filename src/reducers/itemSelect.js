import * as types from '../constants/action-type';

let initialState = null;

let selectReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ITEM_SELECT:
      return action.task;

    default:
      return null;
  }
};

export default selectReducer;