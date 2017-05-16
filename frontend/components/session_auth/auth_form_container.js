import { connect } from 'react-redux';
import AuthForm from './auth_form';
import {
  signUp,
  logIn,
  clearErrors
} from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.errors
});

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);
  const processForm = (formType === 'signup') ? signUp : logIn;
  return {
  processForm: user => dispatch(processForm(user)),
  clearErrors: () => dispatch(clearErrors()),
  formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthForm);
