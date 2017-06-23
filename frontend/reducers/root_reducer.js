import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import ErrorsReducer from './errors_reducer';
import ConlangsReducer from './conlangs_reducer';
import IPAReducer from './ipa_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  errors: ErrorsReducer,
  conlangs: ConlangsReducer,
  ipa: IPAReducer
});

export default RootReducer;
