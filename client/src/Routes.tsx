import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import { routes } from 'constants/routes';

// Views
const MainView = React.lazy(() => import('views/MainView'));
const ContactsView = React.lazy(() => import('views/ContactsView'));

const Routes =  (): JSX.Element => (
  <Switch>
    <Route
      exact
      path={routes.main}
    >
      <MainView />
    </Route>

    <Route
      exact
      path={routes.contacts}
    >
      <ContactsView />
    </Route>
  </Switch>
);

export default Routes;
