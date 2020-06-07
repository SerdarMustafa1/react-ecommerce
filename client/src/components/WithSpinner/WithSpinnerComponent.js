import React from 'react';

import Spinner from '../Spinner/SpinnerComponent';

const WithSpinnerComponent = WrappedComponent => ({
  isLoading,
  ...otherProps
}) => {
  return isLoading ? <Spinner /> : <WrappedComponent {...otherProps} />;
};

export default WithSpinnerComponent;
