import * as PhonologyAPIUtil from '../util/phonology_api_util';

import { receiveErrors } from './errors_actions';

export const RECEIVE_PHONOLOGY = "RECEIVE_PHONOLOGY";

export const updatePhonology = (userId, conlangId, id, phonology) => dispatch => (
  PhonologyAPIUtil.updatePhonology(userId, conlangId, id, phonology)
    .then(res => dispatch(receivePhonology(res)),
          err => dispatch(receiveErrors(err.responseJSON)))
);

export const receivePhonology = phonology => ({
  type: RECEIVE_PHONOLOGY,
  phonology
});
