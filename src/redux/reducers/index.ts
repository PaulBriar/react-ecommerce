import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { userReducer } from "./userReducer";
import { cartReducer } from "./cartReducer";
import { categoryReducer } from './categoryReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  categories: categoryReducer
});

export default persistReducer(persistConfig, rootReducer);
