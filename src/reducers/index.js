import { combineReducers } from 'redux';

import tasksReducer from './tasks';
import formReducer from './controlForm';

const myReducers = combineReducers({
  task: tasksReducer,
  formControl: formReducer
});

export default myReducers;