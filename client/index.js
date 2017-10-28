import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo'; //Injects code from Apollo store into React app
const client = new ApolloClient({}); // Acts as a client side store that for all information coming from graphql
// assumes backend graphql server is available at '/graphql'
import App from './components/App'
import SongList from './components/SongList'

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Route path="/" component={App}/>
      </BrowserRouter>
    </ApolloProvider>
  )
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
