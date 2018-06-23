import * as types from '../constants/action-type';

export const listAll = () => {
  return {
    type: types.LIST_ALL
  }
};

export const addTask = (task) => {
  return {
    type: types.ADD_TASK,
    task: task
  }
};

export const controlForm = () => {
  return {
    type: types.CONTROL_FORM
  }
};

export const openForm = () => {
  return {
    type: types.OPEN_FORM
  }
};

export const closeForm = () => {
  return {
    type: types.CLOSE_FORM
  }
};