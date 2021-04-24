import React from "react";
import { SpinnerContainer, SpinnerOverlay } from "./loading-spinner.style";

const LoadingSpinner = (Wrapper) => ({ isLoading, ...otherProps }) => {
  return isLoading ? (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  ) : (
    <Wrapper {...otherProps} />
  );
};

export default LoadingSpinner;
