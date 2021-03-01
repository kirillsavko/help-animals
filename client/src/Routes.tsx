import React, { createContext } from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import { routes } from 'constants/routes';

import BaseLayout from 'components/hoc/BaseLayout';

// Views
const MainView = React.lazy(() => import('views/MainView'));

const Routes =  (): JSX.Element => {
  const AnimalsContext = createContext([]);

  return (
    <Switch>
      <Route
        exact
        path={routes.main}
        component={(props) => (
          <AnimalsContext.Provider value={[]}>
            <BaseLayout>
              <MainView {...props} />
            </BaseLayout>
          </AnimalsContext.Provider>
        )}
      />
    </Switch>
)};

export default Routes;
