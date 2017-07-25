import { connect } from 'react-redux';
import LexiconIndex from './lexicon_index';

import {
  createWord,
  updateWord,
  deleteWord
} from '../../../../actions/word_actions';

const mapStateToProps = (state, ownProps) => ({
  conlangId: ownProps.conlangId,
  words: ownProps.words,
  authorId: ownProps.authorId
});

const mapDispatchToProps = dispatch => ({
  createWord: (userId, conlangId, word) => dispatch(createWord(userId, conlangId, word)),
  updateWord: (userId, conlangId, id, word) => dispatch(updateWord(userId, conlangId, id, word)),
  deleteWord: (userId, conlangId, id) => dispatch(deleteWord(userId, conlangId, id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LexiconIndex);
