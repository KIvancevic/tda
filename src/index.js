import React from 'react'
import ReactDOM from 'react-dom';
import './global.css';
import App from './App';
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"
import { BrowserRouter } from 'react-router-dom';


const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache()
})

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);