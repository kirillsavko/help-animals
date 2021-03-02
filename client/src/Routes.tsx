import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import { AnimalContextProvider } from 'contexts/AnimalContext';
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
        <AnimalContextProvider>
          <BaseLayout>
            <MainView {...props} />
          </BaseLayout>
        </AnimalContextProvider>
      )}
    />
  </Switch>
);

export default Routes;
