import { combineReducers } from 'redux';

import apiReducer from './apiReducer';
import settingsReducer from './settingsReducer';


const rootReducer = combineReducers({
  api: apiReducer,
  settings: settingsReducer,
});

export default rootReducer;
