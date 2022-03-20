import { combineReducers } from 'redux';

import { Cart } from './cart/reducer';

const rootReducer = combineReducers({
  Cart,
});

export default rootReducer;