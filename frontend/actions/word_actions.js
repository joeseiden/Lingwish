import * as WordAPIUtil from '../util/word_api_util';

import { receiveErrors } from './errors_actions';
import { RECEIVE_SINGLE_CONLANG } from './conlang_actions';

export const RECEIVE_SINGLE_WORD = "RECEIVE_SINGLE_WORD";
export const RECEIVE_WORDS = "RECEIVE_WORDS";
export const RECEIVE_CONLANG_WORDS = "RECEIVE_CONLANG_WORDS";
export const RECEIVE_SINGLE_CONLANG_WORD = "RECEIVE_SINGLE_CONLANG_WORD";
export const REMOVE_CONLANG_WORD = "REMOVE_CONLANG_WORD";

export const requestAllWords = () => dispatch => (
  WordAPIUtil.fetchAllWords()
    .then(words => dispatch(receiveWords(words)),
          err => dispatch(receiveErrors(err.responseJSON)))
);

export const requestSingleWord = id => dispatch => (
  WordAPIUtil.fetchSingleWord()
    .then(word => dispatch(receiveSingleWord(word)),
          err => dispatch(receiveErrors(err.responseJSON)))
);

export const requestConlangWords = conlangId => dispatch => (
  WordAPIUtil.fetchConlangWords(conlangId)
    .then(words => dispatch(receiveConlangWords(words)),
          err => dispatch(receiveErrors(err.responseJSON)))
);

export const createWord = (userId, conlangId, word) => dispatch => (
  WordAPIUtil.createWord(userId, conlangId, word)
    .then(res => dispatch(receiveSingleConlangWord(res)),
          err => dispatch(receiveErrors(err.responseJSON)))
);

export const updateWord = (userId, conlangId, id, word) => dispatch => (
  WordAPIUtil.updateWord(userId, conlangId, id, word)
    .then(res => dispatch(receiveSingleConlangWord(res)),
          err => dispatch(receiveErrors(err.responseJSON)))
);

export const deleteWord = (userId, conlangId, id) => dispatch => (
  WordAPIUtil.deleteWord(userId, conlangId, id)
    .then(res => dispatch(removeConlangWord(res)),
          err => dispatch(receiveErrors(err.responseJSON)))
);

export const receiveWords = words => ({
  type: RECEIVE_WORDS,
  words
});

export const receiveConlangWords = words => ({
  type: RECEIVE_CONLANG_WORDS,
  words
});

export const receiveSingleWord = word => ({
  type: RECEIVE_SINGLE_WORD,
  word
});

export const receiveSingleConlangWord = word => ({
  type: RECEIVE_SINGLE_CONLANG_WORD,
  word
});

export const removeConlangWord = word => ({
  type: REMOVE_CONLANG_WORD,
  word
})
