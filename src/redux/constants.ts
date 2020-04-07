export const SET_CURRENT_USER = "SET_CURRENT_USER";
export const TOGGLE_CART_HIDDEN = "TOGGLE_CART_HIDDEN";
export const ADD_CART_ITEM = "ADD_CART_ITEM";
export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM";
export const REDUCE_ITEM_QUANTITY = "REDUCE_ITEM_QUANTITY";


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

export interface InitialCartState {
  cartHidden: boolean,
  cartItems: CartItemTypes[]
}

export interface InitialUserState {
  currentUser: null | object
}

export interface CartItemTypes {
  id: string,
  name: string,
  imageUrl: string,
  price: string,
  quantity: string
}

export interface UserTypes {
  currentUser: null | object
}