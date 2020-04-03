import { SET_CURRENT_USER } from "../constants";

const INITIAL_STATE = {
  currentUser: null
};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.user
      };

    default:
      return state;
  }
};