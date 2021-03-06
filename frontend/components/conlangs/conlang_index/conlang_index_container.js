import { connect } from 'react-redux';
import ConlangIndex from './conlang_index';

import { requestConlangIndex } from '../../../actions/conlang_actions';

const mapStateToProps = (state, ownProps) => ({
  conlangs: state.conlangIndex
});

const mapDispatchToProps = dispatch => ({
  requestConlangIndex: () => dispatch(requestConlangIndex())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConlangIndex);
