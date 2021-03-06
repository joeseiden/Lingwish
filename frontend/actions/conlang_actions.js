import * as ConlangAPIUtil from '../util/conlang_api_util';

import { receiveErrors } from './errors_actions';

export const RECEIVE_CONLANGS = "RECEIVE_CONLANGS";
export const RECEIVE_SINGLE_CONLANG = "RECEIVE_SINGLE_CONLANG";

export const requestConlangIndex = () => dispatch => (
  ConlangAPIUtil.fetchConlangIndex()
    .then(conlangs => dispatch(receiveConlangs(conlangs)),
          err => dispatch(receiveErrors(err.responseJSON)))
);

export const requestSingleConlang = id => dispatch => (
  ConlangAPIUtil.fetchSingleConlang(id)
    .then(conlang => dispatch(receiveSingleConlang(conlang)),
          err => dispatch(receiveErrors(err.responseJSON)))
);

export const updateConlang = (userId, conlang) => dispatch => (
  ConlangAPIUtil.updateConlang(userId, conlang)
    .then(res => dispatch(receiveSingleConlang(res)),
          err => dispatch(receiveErrors(err.responseJSON)))
);

export const receiveConlangs = conlangs => ({
  type: RECEIVE_CONLANGS,
  conlangs
});

export const receiveSingleConlang = conlang => ({
  type: RECEIVE_SINGLE_CONLANG,
  conlang
});
