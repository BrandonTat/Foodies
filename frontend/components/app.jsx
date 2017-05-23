import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';

import SessionFormContainer from './session_form/session_form_container';
import HomeContainer from './home/home_container';
import SearchContainer from './business/search_container';
import BusinessShow from './business/business_show';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div id="main">
    <Switch>
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute exact path="/" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <Route path="/home" component={HomeContainer} />
      <Route path="/businesses" component={SearchContainer} />
      <Route path="/businesses/:businessId" component={BusinessShow} />
    </Switch>
  </div>
);

export default App;
