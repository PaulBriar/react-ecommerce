import { SET_CURRENT_USER, TOGGLE_CART_HIDDEN, ADD_CART_ITEM, REMOVE_CART_ITEM, REDUCE_ITEM_QUANTITY } from '../redux/constants';

interface SetCurrentUserAction {
  type: typeof SET_CURRENT_USER,
  user: UserTypes
};

interface ToggleCartHiddenAction {
  type: typeof TOGGLE_CART_HIDDEN
};

interface AddCartItemAction {
  type: typeof ADD_CART_ITEM,
  cartItem: CartItemTypes
}

interface RemoveCartItemAction {
  type: typeof REMOVE_CART_ITEM,
  cartItem: CartItemTypes
}

interface ReduceItemQuantityAction {
  type: typeof REDUCE_ITEM_QUANTITY,
  cartItem: CartItemTypes
}

export type CartActionTypes = ToggleCartHiddenAction | AddCartItemAction | RemoveCartItemAction | ReduceItemQuantityAction;

export type UserActionTypes = SetCurrentUserAction;

export interface CartState {
  cartHidden: boolean,
  cartItems: CartItemTypes[]
}

export interface UserState {
  currentUser: null | object
}

export interface CartItemTypes {
  id: string,
  name: string,
  imageUrl: string,
  price: number,
  quantity: number
}

export interface UserTypes {
  currentUser: null | object
}

export interface StateTypes {
  user: UserState,
  cart: CartState
}