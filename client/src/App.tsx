import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  NormalizedCacheObject,
} from '@apollo/client';
import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import FullPageLoader from 'components/FullPageLoader';
import Routes from 'Routes';

import 'assets/styles/base.scss';

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
});

const App = (): JSX.Element => (
  <ApolloProvider client={client}>
    <Suspense fallback={<FullPageLoader />}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Suspense>
  </ApolloProvider>
);

export default App;
