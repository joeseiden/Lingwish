import {
  RECEIVE_SINGLE_CONLANG
} from '../actions/conlang_actions';

import {
  RECEIVE_CONLANG_WORDS,
  RECEIVE_SINGLE_CONLANG_WORD
} from '../actions/word_actions';

import {
  RECEIVE_PHONOLOGY
} from '../phonology_actions';

import phonologyReducer from './phonology_reducer';
import lexiconReducer from './lexicon_reducer';

import merge from 'lodash/merge';

const conlangDetailReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = merge({}, state);
  switch (action.type) {
    case RECEIVE_SINGLE_CONLANG:
      let newConlang = action.conlang;
      return merge({}, newConlang);
    case RECEIVE_CONLANG_WORDS:
      nextState.lexicon = lexiconReducer(undefined, action);
      return nextState;
    case RECEIVE_SINGLE_CONLANG_WORD:
      nextState.lexicon = lexiconReducer(nextState.lexicon, action);
      return nextState;
    case RECEIVE_PHONOLOGY:
      nextState.phonology = phonologyReducer(nextState.phonology, action);
      return nextState;
    default:
      return state;
  }
};

export default conlangDetailReducer;
