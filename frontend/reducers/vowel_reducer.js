import {
  RECEIVE_VOWELS,
  RECEIVE_VOWEL
} from '../actions/vowel_actions';

import merge from 'lodash/merge';

const vowelReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = merge({}, state);
  switch (action.type) {
    case RECEIVE_VOWELS:
      return action.vowels;
    case RECEIVE_VOWEL:
      nextState[action.vowel.id]=action.vowel;
      return nextState;
    default:
      return state;
  }
};

export default vowelReducer;
