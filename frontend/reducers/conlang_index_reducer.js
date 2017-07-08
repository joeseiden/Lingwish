import {
  RECEIVE_CONLANGS
} from '../actions/conlang_actions';

import merge from 'lodash/merge';

const ConlangIndexReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CONLANGS:
      return action.conlangs;
    default:
      return state;
  }
};

export default ConlangIndexReducer;
