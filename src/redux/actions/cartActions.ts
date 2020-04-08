import {
  TOGGLE_CART_HIDDEN,
  ADD_CART_ITEM,
  REMOVE_CART_ITEM,
  REDUCE_ITEM_QUANTITY
} from "../constants";

import { CartActionTypes, CartItemTypes } from '../../utils/interfaces';

export const toggleCartHidden = (): CartActionTypes => ({
  type: TOGGLE_CART_HIDDEN
});

export const addCartItem = (cartItem: CartItemTypes): CartActionTypes => ({
  type: ADD_CART_ITEM,
  cartItem
});

export const removeCartItem = (cartItem: CartItemTypes): CartActionTypes => ({
  type: REMOVE_CART_ITEM,
  cartItem
});

export const reduceCartItemQuantity = (cartItem: CartItemTypes): CartActionTypes => ({
  type: REDUCE_ITEM_QUANTITY,
  cartItem
});
