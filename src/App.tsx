import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import HomePage from './pages/home';

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
});

function App(): JSX.Element {
  return (
    <ApolloProvider client={client}>
      <HomePage />
    </ApolloProvider>
  );
}

export default App;
