import { connect } from 'react-redux';
import UserProfile from './user_profile';

import {
  requestUserProfile,
  editUserProfile,
  deleteUserProfile
} from '../../actions/user_profile_actions';
import { clearErrors } from '../../actions/errors_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  userId: parseInt(ownProps.match.params.userId),
  userProfile: state.userProfile
});

const mapDispatchToProps = dispatch => ({
  requestUserProfile: userId => dispatch(requestUserProfile(userId)),
  editUserProfile: user => dispatch(editUserProfile(user)),
  deleteUserProfile: userId => dispatch(deleteUserProfile(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
