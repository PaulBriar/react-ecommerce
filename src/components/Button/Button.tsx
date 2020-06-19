import React from "react";
import PropTypes from 'prop-types';
import { ButtonProps } from '../../utils/interfaces';

import "./Button.styles.scss";

const Button = ({ children, isGoogleSignIn, inverted, ...props }: ButtonProps) => {
  return (
    <button
      className={`${inverted ? "inverted" : ""} ${
        isGoogleSignIn ? "google-sign-in" : ""
        } button`}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  isGoogleSignIn: PropTypes.bool,
  inverted: PropTypes.bool
}

export default Button;
