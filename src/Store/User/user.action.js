import { USER_ACTIONS } from "./user.types";
import { createAction } from "../../Utils/Reducer/reducer.utils";

export const setCurrentUser = ( user ) => {
  return createAction(USER_ACTIONS.SET_CURRENT_USER, user);
};
