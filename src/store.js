import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';

// middlewares

// reducers
import CardsBoardReducer from './Cards/CardsBoardContainerState';


const w = window;
const composeEnhancers =
  typeof window === 'object' && w.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? w.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      name: 'Test',
    })
    : compose;

const store = createStore(
  combineReducers({
    CardsBoardReducer
  }),
  composeEnhancers(
    applyMiddleware(
      thunk,
    ),
  ),
);

export default store;
