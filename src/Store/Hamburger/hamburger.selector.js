import { createSelector } from "reselect";

const selectHamburgerReducer = (state) => state.hamburger;

export const selectIsHamburgerOpen = createSelector(
  [selectHamburgerReducer],
  (hamburger) => hamburger.isHamburgerOpen
);
