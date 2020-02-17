import React from 'react';
import NavBar from './components/NavBar';
import Layout from './components/Layout';
import Main from './views/main';
import './App.css';

// Apollo Setup
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import fetch from 'node-fetch';

const client = new ApolloClient({
  link: createHttpLink({
    uri: 'http://localhost:4200/graphql',
    fetch: fetch
  }),
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Layout id="hello" >
        <NavBar></NavBar>
        <Main></Main>
      </Layout>
    </ApolloProvider>
  );
}

export default App;
