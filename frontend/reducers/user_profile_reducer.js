import {
  RECEIVE_USER_PROFILE,
  REMOVE_USER_PROFILE
} from '../actions/user_profile_actions';

import merge from 'lodash/merge';

const UserProfileReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER_PROFILE:
      return action.userProfile;
    case REMOVE_USER_PROFILE:
      return {};
    default:
      return state;
  }
};

export default UserProfileReducer;
