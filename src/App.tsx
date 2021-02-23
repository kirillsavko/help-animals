import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from 'Routes';

const App = (): JSX.Element => (
  <Suspense fallback={<div>spinner</div>}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Suspense>
);

export default App;
