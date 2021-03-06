import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';

import SessionFormContainer from './session_form/session_form_container';
import HomeContainer from './home/home_container';
import SearchContainer from './business/search_container';
import BusinessShowContainer from './business_show/business_show_container';

import HeaderContainer from './header/header_container';

import { AuthRoute } from '../util/route_util';

const App = () => (
  <div id="main">
    <Route path="/" component={HeaderContainer} />
    <Switch>
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute exact path="/" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <Route path="/home" component={HomeContainer} />
      <Route exact path="/businesses" component={SearchContainer} />
      <Route path="/businesses/:businessId" component={BusinessShowContainer} />
    </Switch>
  </div>
);

export default App;

  // <Route path="/" component={HeaderContainer} />
