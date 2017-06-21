import {
  RECEIVE_PHONOLOGY
} from '../phonology_actions';

import merge from 'lodash/merge';


const phonologyReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = merge({}, state);
  switch (action.type) {
    case RECEIVE_PHONOLOGY:
      nextState.phonology = action.phonology;
      return nextState;
    default:
      return state;
  }
};

export default phonologyReducer;
