import { combineReducers } from 'redux';

import tasksReducer from './tasks';
import formReducer from './controlForm';
import  selectReducer from  './itemSelect';
import filterReducer from './filterTable';
import sortReducer from './sort';

const myReducers = combineReducers({
  task: tasksReducer,
  formControl: formReducer,
  itemSelect: selectReducer,
  filterTable: filterReducer,
  sortTable: sortReducer
});

export default myReducers;