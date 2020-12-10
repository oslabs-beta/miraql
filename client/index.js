import React from 'react';
import { render } from 'react-dom';
//import ChakraProvider component to use ChakraUI
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import App from './components/App.jsx';

const colors = {
  brand: {

  },
}

const theme = extendTheme({colors})

render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>,
  document.getElementById('root')
)
