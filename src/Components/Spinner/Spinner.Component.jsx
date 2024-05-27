import React from "react";
import { SpinnerContainer, SpinnerOverlay } from "./Spinner.Styles";

const Spinner = () => {
  return (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  );
};

export default Spinner;
