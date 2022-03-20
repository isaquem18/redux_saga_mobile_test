
import { IActionProps, ICart } from './types';

let INITIAL_STATE: ICart = {
  items: [],
  failedStockCheck: []
};

export function Cart(state = INITIAL_STATE, action: IActionProps) {
  const newState = {...state};

  console.log('aaa');

  switch (action.type) {

    case 'ADD_PRODUCT_TO_CART_SUCCESS': {
      const verifyExistency = newState.items.some(item => item.product.id === action.payload.id);
      if (!verifyExistency) {
        newState.items.push({ product: action.payload, quantity: 1 });
      } else {
        newState.items = newState.items.map(item => item.product.id === action.payload.id ? { product: item.product, quantity: item.quantity + 1 }: item);
      };

      return newState;   


    };

    case 'ADD_PRODUCT_TO_CART_FAIL': {
      newState.failedStockCheck.push(action.payload.id);
      const newSetState = new Set(newState.failedStockCheck);
      newState.failedStockCheck = [...newSetState];

      console.log(newState.failedStockCheck);
      return newState;
    };

    default: {
      return state;
    }
  }
}