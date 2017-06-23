import {
  RECEIVE_CONSONANT,
  RECEIVE_CONSONANTS
} from '../actions/consonant_actions';

import {
  RECEIVE_VOWEL,
  RECEIVE_VOWELS
} from '../actions/vowel_actions';

import vowelReducer from './vowel_reducer';
import consonantReducer from './consonant_reducer';

import merge from 'lodash/merge';

const _defaultIPA = {
  consonants: {},
  vowels: {}
};

const IPAReducer = (state = _defaultIPA, action) => {
  Object.freeze(state);
  let nextState = merge({}, state);
  switch (action.type) {
    case RECEIVE_VOWELS:
      nextState.vowels = vowelReducer(undefined, action);
      return nextState;
    case RECEIVE_VOWEL:
      nextState.vowels = vowelReducer(state.vowels, action);
      return nextState;
    case RECEIVE_CONSONANTS:
      nextState.consonants = consonantReducer(undefined, action);
      return nextState;
    case RECEIVE_CONSONANT:
      nextState.consonant = consonantReducer(state.consonant, action);
      return nextState;
    default:
      return state;
  }
};

export default IPAReducer;
