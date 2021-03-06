import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';
import configureStore from './store/store';
import {requestChartableConsonants} from './actions/consonant_actions';

import { logIn, logOut} from './actions/session_actions';

const windowFunctions = { logIn, logOut };


document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.store = store;
  Object.assign(window, windowFunctions);
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
