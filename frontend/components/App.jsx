import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import AuthFormContainer from './session_auth/auth_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = (props) => (
  <div>
    <header>
      <Link to="/" className="header-link">
        <h1>lɪŋ'ɡwɪʃ</h1>
      </Link>
    </header>
    <Switch>
      <AuthRoute path="/login" component={AuthFormContainer} />
      <AuthRoute path="/signup" component={AuthFormContainer} />
    </Switch>
  </div>
);

export default App;
