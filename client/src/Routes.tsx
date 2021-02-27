import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import { routes } from 'constants/routes';

import BaseLayout from 'components/hoc/BaseLayout';

// Views
const MainView = React.lazy(() => import('views/MainView'));

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
  </Switch>
);

export default Routes;
