import { connect } from 'react-redux';
import Phonology from './phonology';

import { updatePhonology } from '../../../../actions/phonology_actions';
import { requestChartableVowels } from '../../../../actions/vowel_actions';
import { requestChartableConsonants } from '../../../../actions/consonant_actions';

const mapStateToProps = (state, ownProps) => ({
  conlangId: ownProps.conlangId,
  conlangConsonants: ownProps.phonology.consonants,
  conlangVowels: ownProps.phonology.vowels,
  ipa: state.ipa,
  currentUser: (state.session.currentUser) ? state.session.currentUser : null,
  phonologyId: ownProps.phonology.id
});

const mapDispatchToProps = dispatch => ({
  updatePhonology: (userId, conlangId, id, phonology) => dispatch(updatePhonology(userId, conlangId, id, phonology)),
  requestChartableVowels: () => dispatch(requestChartableVowels()),
  requestChartableConsonants: () => dispatch(requestChartableConsonants())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Phonology);
