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
      let newTask = {...state[index]};
      newTask.status = !newTask.status;
      state[index] = newTask;
      localStorage.setItem("listTask", JSON.stringify(state));
      return [...state];
    default: return [...state];
  }
};

export default tasksReducer;