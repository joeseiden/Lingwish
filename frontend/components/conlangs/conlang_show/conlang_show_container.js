import { connect } from 'react-redux';
import ConlangShow from './conlang_show';

import {
  requestSingleConlang,
  updateConlang
 } from '../../../actions/conlang_actions';
import { clearErrors } from '../../../actions/errors_actions';

const mapStateToProps = (state, ownProps) => {
  const loggedIn = Boolean(state.session.currentUser)
  const conlang = state.conlangDetail
  const currentUserId = loggedIn ? state.session.currentUser.id : null
  const authorId = conlang.author ? conlang.author.id : null

  return ({
  conlangId: parseInt(ownProps.match.params.conlangId),
  conlang,
  conlangAuthor: loggedIn && currentUserId === authorId,
  currentUserId
})};

const mapDispatchToProps = dispatch => ({
  requestSingleConlang: id => dispatch(requestSingleConlang(id)),
  updateConlang: (userId, conlang) => dispatch(updateConlang(userId, conlang))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConlangShow);
