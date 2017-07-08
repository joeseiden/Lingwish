import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import AuthFormContainer from './session_auth/auth_form_container';
import HomePageContainer from './home_page/home_page_container';
import ConlangShowContainer from './conlangs/conlang_show/conlang_show_container';
import ConlangIndexContainer from './conlangs/conlang_index/conlang_index_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = (props) => (
  <div>
    <header>
      <Link to="/" className="header-link">
        <h1>l&#x026A;&#x014B;&#x0261;w&#x026A;&#x0283;</h1>
      </Link>
    </header>
    <Switch>
      <AuthRoute path="/login" component={AuthFormContainer} />
      <AuthRoute path="/signup" component={AuthFormContainer} />
      <Route path="/conlangs/:conlangId" component={ConlangShowContainer} />
      <Route path="/conlangs" component={ConlangIndexContainer} />
      <Route exact path="/" component={HomePageContainer} />
    </Switch>
  </div>
);

export default App;
