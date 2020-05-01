import kegListReducer from './keg-list-reducer';
import toggleReducer from './toggle-reducer';
import selectReducer from './select-keg-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  toggleConditions: toggleReducer,
  masterKegList: kegListReducer,
  selectedKeg: selectReducer
});

export default rootReducer;