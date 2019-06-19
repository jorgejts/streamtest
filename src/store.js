import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';

// middlewares

// reducers


const w = window;
const composeEnhancers =
  typeof window === 'object' && w.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? w.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      name: 'Lego',
    })
    : compose;

const store = createStore(
  combineReducers({

  }),
  composeEnhancers(
    applyMiddleware(
      thunk,
    ),
  ),
);

export default store;
