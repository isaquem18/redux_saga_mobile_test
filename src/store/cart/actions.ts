import { IProduct } from "../../components/Product";

export function AddProductToCartRequest(product: IProduct) {
  return {
    type: 'ADD_PRODUCT_TO_CART_REQUEST',
    payload: product
  }
};

export function AddProductToCartSuccess(product: IProduct) {
  return {
    type: 'ADD_PRODUCT_TO_CART_SUCCESS',
    payload: product
  }
};

export function AddProductToCartFail(product: IProduct) {
  return {
    type: 'ADD_PRODUCT_TO_CART_FAIL',
    payload: product
  }
};