import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';

import SessionFormContainer from './session_form/session_form_container';
import HomeContainer from './home/home_container';
import HeaderContainer from './header/header_container';
import BusinessIndexContainer from './business/business_index_container';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div id="main">
    <Switch>
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute exact path="/" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <Route path="/home" component={HomeContainer} />
      <Route path="/businesses" component={BusinessIndexContainer} />
    </Switch>
  </div>
);

export default App;
