import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import history from './services/history';
import Main from './views/main';
import Login from './components/Login';
import SignUp from './components/SignUp';
import './App.css';

// Apollo Setup
import ApolloClient from 'apollo-client';
import { ApolloProvider } from '@apollo/react-hooks';
import { InMemoryCache } from 'apollo-cache-inmemory';
import Layout from './components/Layout';
import { createHttpLink } from 'apollo-link-http';
import fetch from 'node-fetch';

const NODE_SERVER = 'https://still-meadow-76273.herokuapp.com/graphql'
const DEV_SERVER = 'http://localhost:4200/graphql'
const prod = true;

const client = new ApolloClient({
  link: createHttpLink({
    uri: prod ? NODE_SERVER : DEV_SERVER,
    fetch: fetch
  }),
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router history={history}>
        <Layout>
          <Switch>
            <Route exact path="/" component={Main}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/sign-up" component={SignUp}></Route>
          </Switch>
        </Layout>
      </Router>
    </ApolloProvider>
  );
}

export default App;
