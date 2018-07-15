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

export const updateTask = (task) => {
  return {
    type: types.UPDATE_TASK,
    task
  }
};

export const updateStatus = (id) => {
  return {
    type: types.UPDATE_STATUS,
    id
  }
};

export const itemSelect = (task) => {
  return {
    type: types.ITEM_SELECT,
    task
  };
};

export const filterTable = (filter) => {
  return {
    type: types.FILTER_TABLE,
    filter
  }
};

export const deleteTask = (id) => {
  return {
    type: types.DELETE_TASK,
    id
  }
};