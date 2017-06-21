import {
  RECEIVE_SINGLE_CONLANG
} from '../actions/conlang_actions';

import {
  RECEIVE_CONLANG_WORDS,
  RECEIVE_SINGLE_CONLANG_WORD
} from '../actions/word_actions';

import lexiconReducer from './lexicon_reducer';

import {
  RECEIVE_PHONOLOGY
} from '../phonology_actions';

import phonologyReducer from './phonology_reducer';

import merge from 'lodash/merge';

const conlangDetailReducer = (state = {}, action) => {
  Object.freeze(state);
  let conlang = state.conlangDetail;
  switch (action.type) {
    case RECEIVE_SINGLE_CONLANG:
      let newConlang = action.conlang;
      return merge({}, newConlang);
    case RECEIVE_CONLANG_WORDS:
      let newLexicon = action.words;
      conlang.lexicon = newLexicon;
      return merge({}, conlang);
    case RECEIVE_SINGLE_CONLANG_WORD:
      let newWord = action.word;
      conlang.lexicon.push(newWord);
      return merge({}, conlang);
    case RECEIVE_PHONOLOGY:
      let newPhonology = action.phonology;
      conlang.phonology = newPhonology;
      return merge({}, conlang);
    default:
      return state;
  }
};

export default conlangDetailReducer;
