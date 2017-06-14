import * as ConlangAPIUtil from '../util/conlang_api_util';
import * as PhonologyAPIUtil from '../util/phonology_api_util';

import { receiveErrors } from './errors_actions';

export const RECEIVE_CONLANGS = "RECEIVE_CONLANGS";
export const RECEIVE_SINGLE_CONLANG = "RECEIVE_SINGLE_CONLANG";

export const requestAllConlangs = () => dispatch => (
  ConlangAPIUtil.fetchAllConlangs()
    .then(conlangs => dispatch(receiveConlangs(conlangs)),
          err => dispatch(receiveErrors(err.responseJSON)))
);

export const requestSingleConlang = id => dispatch => (
  ConlangAPIUtil.fetchSingleConlang(id)
    .then(conlang => dispatch(receiveSingleConlang(conlang)),
          err => dispatch(receiveErrors(err.responseJSON)))
);

export const updatePhonology = (userId, conlangId, id, phonology) => dispatch => (
  PhonologyAPIUtil.updatePhonology(userId, conlangId, id, phonology)
    .then(conlang => dispatch(receiveSingleConlang(conlang)),
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
