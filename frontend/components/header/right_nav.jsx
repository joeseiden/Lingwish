import React from 'react';
import ReactDOM from 'react-dom';
import { Link, withRouter } from 'react-router-dom';

const authLinks = () => (
  <nav className="right-nav auth-links">
    <Link to={`/login`} className='auth-link'>Login</Link>
    <Link to={`/signup`} className='auth-link'>New User?</Link>
  </nav>
);

const personalGreeting = (currentUser, logOut) => (
  <div className='right-nav greeting-container'>
    <h3 className="greeting">
      Hi, {currentUser.username}!
    </h3>
    <Link to={`/`} className='profile-link'>
      My Profile
    </Link>
    <button onClick={logOut} id='logout-button' className='header-button'>
      Log Out
    </button>
  </div>
);

const RightNav = ({ currentUser, logOut }) => (
  currentUser ? personalGreeting(currentUser, logOut) : authLinks()
);

export default RightNav;
