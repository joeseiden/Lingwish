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
import RightNavContainer from './header/right_nav_container';
import UserProfileContainer from './user_profile/user_profile_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = (props) => (
  <div>
    <header id='header main-nav' className='nav-bar'>
      <div className="left-nav">
        <Link to="/" className="header-link">
          <h1 className="ipa">l&#x026A;&#x014B;&#x0261;w&#x026A;&#x0283;</h1>
        </Link>
      </div>
      <RightNavContainer />
    </header>
    <Switch>
      <AuthRoute path="/login" component={AuthFormContainer} />
      <AuthRoute path="/signup" component={AuthFormContainer} />
      <Route path="/users/:userId" component={UserProfileContainer} />
      <Route path="/conlangs/:conlangId" component={ConlangShowContainer} />
      <Route path="/conlangs" component={ConlangIndexContainer} />
      <Route exact path="/" component={HomePageContainer} />
    </Switch>
  </div>
);

export default App;
