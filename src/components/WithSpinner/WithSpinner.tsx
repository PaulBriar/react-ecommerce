import React from 'react'

import './WithSpinner.styles.scss'

const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
  return isLoading ? (
    <div className="spinnerOverlay">
      <div className="spinnerContainer" />
    </div>
  ) : (
      <WrappedComponent {...otherProps} />
    )
}

export default WithSpinner

