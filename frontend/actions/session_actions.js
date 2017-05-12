import * as SessionAPIUtil from '../util/session_api_util';

import receiveErrors from './errors_actions';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";

export const signUp = user => dispatch => (
  SessionAPIUtil.signUp(user)
    .then(currentUser => dispatch(receiveCurrentUser(currentUser)),
      err => dispatch(receiveErrors(err.responseJSON)))
);

export const logIn = user => dispatch => (
  SessionAPIUtil.logIn(user)
    .then(currentUser => dispatch(receiveCurrentUser(currentUser)),
      err => dispatch(receiveErrors(err.responseJSON)))
);

export const logOut = () => dispatch => (
  SessionAPIUtil.logOut()
    .then(() => dispatch(receiveCurrentUser(null)),
      err => dispatch(receiveErrors(err.responseJSON)))
);

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});
