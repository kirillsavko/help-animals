import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import { routes } from 'constants/routes';

import BaseLayout from 'components/hoc/BaseLayout';

// Views
const MainView = React.lazy(() => import('views/MainView'));
const ContactsView = React.lazy(() => import('views/ContactsView'));

const Routes =  (): JSX.Element => (
  <Switch>
    <Route
      exact
      path={routes.main}
      component={(props) => (
        <BaseLayout>
          <MainView {...props} />
        </BaseLayout>
      )}
    />

    <Route
      exact
      path={routes.contacts}
      component={(props) => (
        <BaseLayout>
          <ContactsView {...props} />
        </BaseLayout>
      )}
    />
  </Switch>
);

export default Routes;
