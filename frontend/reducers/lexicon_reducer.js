import {
  RECEIVE_CONLANG_WORDS,
  RECEIVE_SINGLE_CONLANG_WORD,
  REMOVE_CONLANG_WORD
} from '../actions/word_actions';

const lexiconReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CONLANG_WORDS:
      return action.words;
    case RECEIVE_SINGLE_CONLANG_WORD:
      return [
        ...state,
        action.word
      ];
    case REMOVE_CONLANG_WORD:
      const idx = state.indexOf(action.word);
      if (idx !== -1) {
        return [
          ...state.slice(0, idx),
          ...state.slice(idx + 1)
        ];
      }
    default:
      return state;
  }
};
