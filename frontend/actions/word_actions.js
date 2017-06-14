import * as WordAPIUtil from '../util/word_api_util';

import { receiveErrors } from './errors_actions';
import { RECEIVE_SINGLE_CONLANG } from './conlang_actions';

export const RECEIVE_SINGLE_WORD = "RECEIVE_SINGLE_WORD";
export const RECEIVE_WORDS = "RECEIVE_WORDS";

export const requestAllWords = () => dispatch => (
  WordAPIUtil.fetchAllWords()
    .then(words => dispatch(receiveWords(words)),
          err => dispatch(receiveErrors(err.responseJSON)))
);

export const receiveWords = words => ({
  type: RECEIVE_WORDS,
  words
});
