import React from 'react';
import { Provider } from 'react-redux';
import {
  Router,
  Route,
  IndexRoute,
  hasHistory
} from 'react-router';
import App from './App';

const Root = ({ store }) => {

  return (
    <Provider store={ store }>
      <Router history={ hasHistory }>
        <Route path="/" component={ App }>

        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
