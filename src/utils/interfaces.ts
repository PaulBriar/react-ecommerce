import { SET_CURRENT_USER, TOGGLE_CART_HIDDEN, ADD_CART_ITEM, REMOVE_CART_ITEM, REDUCE_ITEM_QUANTITY, DEFAULT_CATEGORY_STATE, DEFAULT_SHOP_STATE, FETCH_SHOP_DATA_BEGIN, FETCH_SHOP_DATA_SUCCESS, FETCH_SHOP_DATA_FAILURE } from '../redux/constants';

import { ReactNode } from 'react';

export interface ButtonProps {
  children?: ReactNode;
  isGoogleSignIn?: boolean;
  inverted?: boolean;
  onClick?: any;
}
interface SetCurrentUserAction {
  type: typeof SET_CURRENT_USER,
  user: UserTypes
}

interface ToggleCartHiddenAction {
  type: typeof TOGGLE_CART_HIDDEN
}

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

interface DefaultCategoryAction {
  type: typeof DEFAULT_CATEGORY_STATE
}

interface DefaultShopAction {
  type: typeof DEFAULT_SHOP_STATE
}

interface FetchShopDataBeginAction {
  type: typeof FETCH_SHOP_DATA_BEGIN
}

interface FetchShopDataSuccessAction {
  type: typeof FETCH_SHOP_DATA_SUCCESS
  shopData: typeof Object
}

interface FetchShopDataFailureAction {
  type: typeof FETCH_SHOP_DATA_FAILURE
  error: typeof Object
}

export type ShopActionTypes = DefaultShopAction | FetchShopDataBeginAction | FetchShopDataSuccessAction | FetchShopDataFailureAction;

export type CategoryActionTypes = DefaultCategoryAction;

export type CartActionTypes = ToggleCartHiddenAction | AddCartItemAction | RemoveCartItemAction | ReduceItemQuantityAction;

export type UserActionTypes = SetCurrentUserAction;

export interface CartState {
  cartHidden: boolean,
  cartItems: CartItemTypes[]
}
export interface CartDropdownProps {
  cartItems: {
    id: string,
    imageUrl: string,
    price: number,
    name: string,
    quantity: number
  }[];
  history: {
    push: any
  };
  toggleCartHidden(): any
}

export interface UserState {
  currentUser: null | object
}

export interface CategoryState {
  categoryItems: {
    title: string
    imageUrl: string,
    id: number,
    size?: string,
    linkUrl: string
  }[]
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

export interface CheckoutProps {
  cartItems: {
    id: string,
    imageUrl: string,
    price: number,
    name: string,
    quantity: number
  }[];
  total: number;
}

export interface CheckoutItemProps {
  cartItem?: CartItemTypes;
  removeItem(cartItem: CartItemTypes): object;
  addItem(cartItem: CartItemTypes): object;
  reduceItem(cartItem: CartItemTypes): object;
}

export interface CategoryProps {
  categories: {
    categoryItems: [
      {
        title: string
        imageUrl: string,
        id: number,
        size?: string,
        linkUrl: string
      }
    ]
  }
}

export interface CategoryStateProps {
  categoryItems: [
    {
      title: string
      imageUrl: string,
      id: number,
      size?: string,
      linkUrl: string
    }
  ]
}
export interface CategoryPreviewProps {
  title: string
  items: {
    title: string,
    imageUrl: string,
    id: number,
    size?: string,
    linkUrl: string
  }[]
}

export interface CategoryItemProps {
  title: string;
  imageUrl: string;
  size?: string;
  history: {
    push(match: string): any
  };
  match: {
    url: string
  }
  linkUrl: string;
}

export interface CategoryPageItem {
  item: {
    title: string,
    imageUrl: string,
    id: number,
    size ?: string,
    linkUrl: string
  }
}

export interface MenuItemProps {
  title: string;
  imageUrl: string;
  size?: string;
  history: {
    push(match: string): any
  };
  match: {
    url: string
  }
  linkUrl: string;
}

//TODO - Figure out how to create seperate type for categories to stay DRY
export interface ShopProps {
  match: {
    isExact: boolean,
    params: object,
    path: string,
    url: string
  }
}

export interface CategoryOverviewProps {
  category: {
    id: number,
    title: string,
    routeName: string,
    items: {
      id: number,
      name: string,
      imageUrl: string,
      price: number
    }[]
  }
}

export interface CategoryPageProps {
  category: {
    id: number,
    title: string,
    routeName: string,
    items: {
      id: number,
      name: string,
      imageUrl: string,
      price: number
    }[]
  }
}