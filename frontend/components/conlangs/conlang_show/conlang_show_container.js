import { connect } from 'react-redux';
import ConlangShow from './conlang_show';

import { requestSingleConlang } from '../../../actions/conlang_actions';
import { clearErrors } from '../../../actions/errors_actions';

const mapStateToProps = (state, ownProps) => ({
  conlangId: parseInt(ownProps.match.params.conlangId),
  conlang: state.conlangDetail
});

const mapDispatchToProps = dispatch => ({
  requestSingleConlang: id => dispatch(requestSingleConlang(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConlangShow);
