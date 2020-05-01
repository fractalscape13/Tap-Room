import kegListReducer from './keg-list-reducer';
import toggleReducer from './toggle-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  toggleConditions: toggleReducer,
  masterKegList: kegListReducer
});

export default rootReducer;