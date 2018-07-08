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
      //list task
    case types.ADD_TASK:
      state.push(action.task);
      localStorage.setItem("listTask", JSON.stringify(state));
      return [...state];
      //add task

    case types.UPDATE_STATUS:
      let indexStatus = state.findIndex(item => item.id === action.id);
      let newTask = {...state[indexStatus]};
      console.log(newTask);
      newTask.status = !newTask.status;
      state[indexStatus] = newTask;
      localStorage.setItem("listTask", JSON.stringify(state));
      return [...state];
      //update status

    case types.UPDATE_TASK:
      let indexTask = state.findIndex(item => item.id === action.task.id);
      state[indexTask] = action.task;
      localStorage.setItem("listTask", JSON.stringify(state));
      return state;
      //update task

    default: return [...state];
  }
};

export default tasksReducer;