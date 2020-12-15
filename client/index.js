import React from 'react';
import { render } from 'react-dom';
//import ChakraProvider component to use ChakraUI
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import App from './components/App.jsx';

// adding Chaka brand colors
const colors = {
  brand: {},
};

// extending theme with colors dictated above
const theme = extendTheme({ colors });

// rendering full app - added root script
render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>,
  document.getElementById('root')
);
