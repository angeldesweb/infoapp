import React from 'react';
import { render } from 'react-dom';
import client from './apollo'
import 'semantic-ui-css/semantic.min.css'
import { ApolloProvider } from '@apollo/react-hooks';
import Routes from './routes';
if(process.env.NODE_ENV==="development"){
  const dotenv = require('dotenv')
  const dotenvExpand = require('dotenv-expand')
  const myEnv = dotenv.config()
  dotenvExpand(myEnv)
}

function App() {
    return (
      <ApolloProvider client={client}><div><Routes/></div></ApolloProvider>
    );
  }
  

render(<App/>, document.getElementById('root'));