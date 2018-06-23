import { combineReducers } from 'redux';

import tasksReducer from './tasks';

const myReducers = combineReducers({
  task: tasksReducer
});

export default myReducers;