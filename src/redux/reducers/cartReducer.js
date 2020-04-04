import { addItemToCart } from "../../utils/cartUtils";

import { TOGGLE_CART_HIDDEN, ADD_CART_ITEM } from "../constants";

const INITIAL_STATE = {
  cartHidden: true,
  cartItems: []
};

export const cartReducer = (state = INITIAL_STATE, action) => {
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
    default:
      return state;
  }
};
