import React from 'react';

import { SpinnerContainer, SpinnerOverlay } from './WithSpinnerStyles';

const WithSpinnerComponent = WrappedComponent => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
  return Spinner;
};

export default WithSpinnerComponent;
