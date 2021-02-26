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
      component={(props) => (
        <MainView {...props} />
      )}
    />

    <Route
      exact
      path={routes.contacts}
      component={(props) => (
        <ContactsView {...props} />
      )}
    />
  </Switch>
);

export default Routes;
