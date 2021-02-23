import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import FullPageLoader from 'components/FullPageLoader';
import Routes from 'Routes';

import 'assets/styles/base.scss';

const App = (): JSX.Element => (
  <Suspense fallback={<FullPageLoader />}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Suspense>
);

export default App;
