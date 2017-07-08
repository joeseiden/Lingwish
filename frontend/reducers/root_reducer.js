import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import ErrorsReducer from './errors_reducer';
import ConlangDetailReducer from './conlang_detail_reducer';
import ConlangIndexReducer from './conlang_index_reducer';
import IPAReducer from './ipa_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  errors: ErrorsReducer,
  conlangDetail: ConlangDetailReducer,
  conlangIndex: ConlangIndexReducer,
  ipa: IPAReducer
});

export default RootReducer;
