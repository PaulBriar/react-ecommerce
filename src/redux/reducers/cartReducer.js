import {
  TOGGLE_CART_HIDDEN,
  ADD_CART_ITEM,
  REMOVE_CART_ITEM
} from "../constants";

const INITIAL_STATE = {
  hidden: true,
  cartItems: []
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    case ADD_CART_ITEM:
      return {
        ...state,
        cartItems: [...state.cartItems, action.cartItem]
      };
    case REMOVE_CART_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          cartItem => cartItem !== action.cartItem
        )
      };
    default:
      return state;
  }
};
