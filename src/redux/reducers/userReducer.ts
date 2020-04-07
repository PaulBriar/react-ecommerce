import { SET_CURRENT_USER, InitialUserState, UserActionTypes } from "../constants";

const INITIAL_STATE: InitialUserState = {
  currentUser: null
};

export const userReducer = (state = INITIAL_STATE, action: UserActionTypes): InitialUserState => {
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
