import React from 'react'

import { WrappedComponentProps } from '../../utils/interfaces'

import './WithSpinner.styles.scss'

const WithSpinner = (WrappedComponent: Function) => ({ isLoading, ...otherProps }: WrappedComponentProps) => {
  return isLoading ? (
    <div className="spinnerOverlay">
      <div className="spinnerContainer" />
    </div>
  ) : (
      <WrappedComponent {...otherProps} />
    )
}

export default WithSpinner

