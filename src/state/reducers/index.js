import { combineReducers } from 'redux';

import rosterReducer from './rosterReducer';
import settingsReducer from './settingsReducer';


const rootReducer = combineReducers({
  roster: rosterReducer,
  settings: settingsReducer,
});

export default rootReducer;
