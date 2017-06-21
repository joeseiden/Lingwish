import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import ErrorsReducer from './errors_reducer';
import conlangDetailReducer from './conlang_detail_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  errors: ErrorsReducer,
  conlangDetail: conlangDetailReducer
});

export default RootReducer;
