import * as types from '../constants/action-type';

let data;
if(localStorage.getItem('listTask')) {
  data = JSON.parse(localStorage.getItem('listTask'));
}

let initialState = data ? data : [];

let tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LIST_ALL:
      return [...state];
    case types.ADD_TASK:
      state.push(action.task);
      localStorage.setItem("listTask", JSON.stringify(state));
      return [...state];
    case types.UPDATE_STATUS:
      let index = state.findIndex(item => item.id === action.id);
      state[index].status = !state[index].status;
      return [...state];
    default: return [...state];
  }
};

export default tasksReducer;