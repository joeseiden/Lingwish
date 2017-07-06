import * as ConsonantAPIUtil from '../util/consonant_api_util';

import { receiveErrors } from './errors_actions';

export const RECEIVE_CONSONANTS = "RECEIVE_CONSONANTS";
export const RECEIVE_CONSONANT = "RECEIVE_CONSONANT";

export const requestAllConsonants = () => dispatch => (
  ConsonantAPIUtil.fetchAllConsonants()
    .then(response => dispatch(receiveConsonants(response)),
          err => dispatch(receiveErrors(err.responseJSON)))
);

export const requestChartableConsonants = () => dispatch => (
  ConsonantAPIUtil.fetchChartableConsonants()
    .then(response => dispatch(receiveConsonants(response)),
          err => dispatch(receiveErrors(err.responseJSON)))
);

export const requestConsonantInventory = inventory => dispatch => (
  ConsonantAPIUtil.fetchConsonantInventory(inventory)
    .then(response => dispatch(receiveConsonants(response)),
          err => dispatch(receiveErrors(err.responseJSON)))
);

export const requestConsonant = id => dispatch => (
  ConsonantAPIUtil.fetchConsonant(id)
    .then(response => dispatch(receiveConsonant(response)),
          err => dispatch(receiveErrors(err.responseJSON)))
);

export const receiveConsonants = consonants => ({
  type: RECEIVE_CONSONANTS,
  consonants
});

export const receiveConsonant = consonant => ({
  type: RECEIVE_CONSONANT,
  consonant
});
