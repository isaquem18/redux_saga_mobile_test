import { all, takeLatest, select, call, put } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';

import api from '../../api';

import { IStore } from '..';
import { IProduct } from '../../components/Product';
import { IActionProps } from './types';
import { AddProductToCartFail, AddProductToCartSuccess } from './actions';

function* checkProductStock({ payload }: IActionProps) {

  const product = { ...payload };
  
  const currentQuantity: number = yield select((state: IStore) => {
    return state.Cart.items.find(item => item.product.id === product.id)?.quantity ?? 0
  });

  const availableStockResponse: AxiosResponse<IProduct> = yield call(api.get, `/products/${product?.id}`);


  // if que compara se o estoque é maior que a quantidade atual
  if (Math.floor(availableStockResponse.data.rating.rate) > currentQuantity) { 
    yield put(AddProductToCartSuccess(product)) // put -> funciona como o dispatch
  } else {
    yield put(AddProductToCartFail(product))
  }

  
}

export default all([
  takeLatest('ADD_PRODUCT_TO_CART_REQUEST', checkProductStock)
]);
