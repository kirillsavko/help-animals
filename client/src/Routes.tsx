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
const AnimalView = React.lazy(() => import('views/AnimalView'));

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

    <Route
      exact
      path={routes.animal}
      component={(props) => (
        <BaseLayout>
          <AnimalView {...props} />
        </BaseLayout>
      )}
    />
  </Switch>
);

export default Routes;
