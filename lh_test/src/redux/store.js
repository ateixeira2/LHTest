import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from '../reducers';
import listSocieties from '../sagas/callApi/listSocieties';

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = composeWithDevTools({});

const middlewares = [
  sagaMiddleware
];
const store = createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(...middlewares)
  )
);

sagaMiddleware.run(listSocieties);

export default store;
