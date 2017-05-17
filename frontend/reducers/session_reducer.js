import {
  RECEIVE_CURRENT_USER
} from '../actions/session_actions';
import merge from 'lodash/merge';

const SessionReducer = (state = { currentUser: null }, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      let currentUser = action.currentUser;
      return merge({}, state, {
        currentUser
      });
    default:
      return state;
  }
};

export default SessionReducer;
