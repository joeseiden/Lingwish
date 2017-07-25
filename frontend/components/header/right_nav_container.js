import { connect } from 'react-redux';
import RightNav from './right_nav';
import {
  logOut
} from '../../actions/session_actions';

const mapStateToProps = ({session}) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  logOut: () => dispatch(logOut())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RightNav);
