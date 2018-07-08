import { combineReducers } from 'redux';

import tasksReducer from './tasks';
import formReducer from './controlForm';
import  selectReducer from  './itemSelect';

const myReducers = combineReducers({
  task: tasksReducer,
  formControl: formReducer,
  itemSelect: selectReducer
});

export default myReducers;