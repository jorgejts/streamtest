import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import CardsBoard from './Cards/CardsBoard';



function App() {
  return (
    <Provider store={store}>
      <CardsBoard />
    </Provider>
  );
}

export default App;
