import { SET_CURRENT_USER } from "../constants";
import { UserState, UserActionTypes } from '../../utils/interfaces';

const INITIAL_STATE: UserState = {
  currentUser: null
};

export const userReducer = (state = INITIAL_STATE, action: UserActionTypes): UserState => {
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
