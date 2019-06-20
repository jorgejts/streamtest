import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import CardsBoardContainer from './Cards/CardsBoardContainer';



function App() {
  return (
    <Provider store={store}>
      <CardsBoardContainer />
    </Provider>
  );
}

export default App;
