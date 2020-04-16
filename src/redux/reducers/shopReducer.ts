import SHOP_DATA from './shopData';

import { ShopActionTypes } from '../../utils/interfaces';

const INITIAL_STATE = {
  categories: SHOP_DATA
}

export const shopReducer = (state = INITIAL_STATE, action: ShopActionTypes) => {
  switch (action.type) {
    default:
      return state;
  }
}