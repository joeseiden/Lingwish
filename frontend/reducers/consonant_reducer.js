import {
  RECEIVE_CONSONANT,
  RECEIVE_CONSONANTS
} from '../actions/consonant_actions';

import merge from 'lodash/merge';

const consonantReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = merge({}, state);
  switch (action.type) {
    case RECEIVE_CONSONANTS:
      return action.consonants;
    case RECEIVE_CONSONANT:
      nextState[action.consonant.id]=action.consonant;
      return nextState;
    default:
      return state;
  }
};

export default consonantReducer;
