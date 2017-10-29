import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';
import ApolloClient from 'apollo-client';
import { ApolloProvider } from 'react-apollo'; //Injects code from Apollo store into React app
const client = new ApolloClient({
  dataIdFromObject: o => o.id // this function takes every data object fetched from graphql and runs it through this function to assign
  //each data object an ID within the Apollo store.
  // this allows the Apollo Store/ Client to associate each piece of data with a key and update components that use
  // data link with that piece of data.

  //the downside here is that every single query MUST return an 'id' field.
}); // Acts as a client side store that for all information coming from graphql
// assumes backend graphql server is available at '/graphql'
import App from './components/App'
import SongList from './components/SongList'
import './style/style.css'

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
