import { HAMBURGER_ACTION_TYPES } from "./hamburger.types";

const INITIAL_STATE = {
  isHamburgerOpen: false,
};

export const hamburgerReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch(type) {
    case HAMBURGER_ACTION_TYPES.SET_IS_HAMBURGER_OPEN:
        return {...state, isHamburgerOpen: payload}
    default:
        return state
  }
};
