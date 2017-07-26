import * as UserAPIUtil from '../util/user_api_util';

import { receiveErrors } from './errors_actions';

export const RECEIVE_USER_PROFILE = "RECEIVE_USER_PROFILE";
export const REMOVE_USER_PROFILE = "REMOVE_USER_PROFILE";

export const fetchUserProfile = userId => dispatch => (
  UserAPIUtil.fetchUser(userId)
    .then(userProfile => dispatch(receiveUserProfile(userProfile)),
          err => dispatch(receiveErrors(err.responseJSON)))
);

export const editUserProfile = user => dispatch => (
  UserAPIUtil.editAccount(user)
    .then(userProfile => dispatch(receiveUserProfile(userProfile)),
          err => dispatch(receiveErrors(err.responseJSON)))
);

export const deleteUserProfile = userId => dispatch => (
  UserAPIUtil.deleteAccount(userId)
    .then(userProfile => dispatch(removeUserProfile(userProfile)),
          err => dispatch(receiveErrors(err.responseJSON)))
);

export const receiveUserProfile = userProfile => ({
  type: RECEIVE_USER_PROFILE,
  userProfile
});

export const removeUserProfile = userProfile => ({
  type: REMOVE_USER_PROFILE,
  userProfile
});
