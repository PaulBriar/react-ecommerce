import { SET_CURRENT_USER } from "../constants";
import { UserActionTypes } from '../../utils/interfaces';

interface User {
  currentUser: object
}
export const setCurrentUser = (user: User): UserActionTypes => ({
  type: SET_CURRENT_USER,
  user
});
