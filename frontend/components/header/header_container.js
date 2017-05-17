import { connect } from 'react-redux';
import Header from './header';
import {
  logOut
} from '../../actions/session_actions';

const mapStateToProps = ({session}) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  logOut: () => dispatch(logOut())
});
