import { addItemToCart, removeItemFromQuantity } from "../../utils/cartUtils";

import {
  TOGGLE_CART_HIDDEN,
  ADD_CART_ITEM,
  REMOVE_CART_ITEM,
  REDUCE_ITEM_QUANTITY,
  InitialCartState,
  CartActionTypes
} from "../constants";

const INITIAL_STATE: InitialCartState = {
  cartHidden: true,
  cartItems: []
};

export const cartReducer = (state = INITIAL_STATE, action: CartActionTypes): InitialCartState => {
  switch (action.type) {
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        cartHidden: !state.cartHidden
      };
    case ADD_CART_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.cartItem)
      };
    case REMOVE_CART_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          cartItem => cartItem.id !== action.cartItem.id
        )
      };
    case REDUCE_ITEM_QUANTITY:
      return {
        ...state,
        cartItems: removeItemFromQuantity(state.cartItems, action.cartItem)
      };
    default:
      return state;
  }
};
