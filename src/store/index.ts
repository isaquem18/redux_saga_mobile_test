import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { ICart } from './cart/types';
import rootReducer from './rootReducer';
import rootSaga from './rootSagas';

const SagaMiddleware = createSagaMiddleware();

const middlewares = [
  SagaMiddleware
];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

SagaMiddleware.run(rootSaga);

export default store;

export interface IStore {
  Cart: ICart;
}