import React from 'react';
import Router from './router/Route';
import { GlobalState } from './global/GlobalState'
import { ChakraProvider} from '@chakra-ui/react'
import { theme } from './constants/theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <GlobalState>

        <Router />

      </GlobalState>
    </ChakraProvider>
  );
}

export default App;
