import { combineReducers } from 'redux';

import tasksReducer from './tasks';
import formReducer from './controlForm';
import  selectReducer from  './itemSelect';
import filterReducer from './filterTable';

const myReducers = combineReducers({
  task: tasksReducer,
  formControl: formReducer,
  itemSelect: selectReducer,
  filterTable: filterReducer
});

export default myReducers;