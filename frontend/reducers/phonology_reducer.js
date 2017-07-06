import {
  RECEIVE_PHONOLOGY
} from '../actions/phonology_actions';

import merge from 'lodash/merge';


const phonologyReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PHONOLOGY:
      return action.phonology;
    default:
      return state;
  }
};

export default phonologyReducer;
