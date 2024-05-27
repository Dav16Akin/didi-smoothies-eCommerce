import { createAction } from "../../Utils/Reducer/reducer.utils";
import { HAMBURGER_ACTION_TYPES } from "./hamburger.types";

export const setIsHamburgerOpen = (bool) => {
  return createAction(HAMBURGER_ACTION_TYPES.SET_IS_HAMBURGER_OPEN, bool);
};
