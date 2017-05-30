import * as VowelAPIUtil from '../util/vowel_api_util';

import { receiveErrors } from './errors_actions';

export const RECEIVE_VOWELS = "RECEIVE_VOWELS";
export const RECEIVE_VOWEL = "RECEIVE_VOWEL";

export const requestAllVowels = () => dispatch => (
  VowelAPIUtil.fetchAllVowels()
    .then(response => dispatch(receiveVowels(response)),
          err => dispatch(receiveErrors(err.responseJSON)))
);

export const requestVowelInventory = inventory => dispatch => (
  VowelAPIUtil.fetchVowelInventory(inventory)
    .then(response => dispatch(receiveVowels(response)),
          err => dispatch(receiveErrors(err.responseJSON)))
);

export const requestVowel = id => dispatch => (
  VowelAPIUtil.fetchVowel(id)
    .then(response => dispatch(receiveVowel(response)),
          err => dispatch(receiveErrors(err.responseJSON)))
);

export const receiveVowels = vowels => ({
  type: RECEIVE_VOWELS,
  vowels
});

export const receiveVowel = vowel => ({
  type: RECEIVE_VOWEL,
  vowel
});
