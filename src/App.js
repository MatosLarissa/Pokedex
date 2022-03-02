import React from 'react';
import Router from './router/Route';
import { GlobalState } from './global/GlobalState'

function App() {
  return (
    <div>
      <GlobalState>

        <Router />

      </GlobalState>
    </div >
  );
}

export default App;
