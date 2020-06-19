import { ShopActionTypes } from '../../utils/interfaces';
import { FETCH_SHOP_DATA_BEGIN, FETCH_SHOP_DATA_SUCCESS, FETCH_SHOP_DATA_FAILURE } from '../constants';

const INITIAL_STATE = {
  categories: {},
  loading: false,
  error: {}
}

export const shopReducer = (state = INITIAL_STATE, action: ShopActionTypes) => {
  switch (action.type) {
    case FETCH_SHOP_DATA_BEGIN:
      return {
        ...state,
        loading: true
      }
    case FETCH_SHOP_DATA_SUCCESS:
      return {
        ...state,
        categories: action.shopData,
        loading: false
      }
    case FETCH_SHOP_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      }
    default:
      return state;
  }
}