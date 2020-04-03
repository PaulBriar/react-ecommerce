import {
  TOGGLE_CART_HIDDEN,
  ADD_CART_ITEM,
  REMOVE_CART_ITEM
} from "../constants";

export const toggleCartHidden = () => ({
  type: TOGGLE_CART_HIDDEN
});

export const addCartItem = cartItem => ({
  type: ADD_CART_ITEM,
  cartItem
});

export const removeCartItem = cartItem => ({
  type: REMOVE_CART_ITEM,
  cartItem
});
