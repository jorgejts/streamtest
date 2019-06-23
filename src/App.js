import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import store from './store';
import CardsBoardContainer from './Cards/CardsBoardContainer';
import EditCardContainer from './EditCard/EditCardContainer';



function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={CardsBoardContainer}/>
        <Route exact path="/edit" component={EditCardContainer}/>
        <Redirect from='/edit' to='/'/>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
