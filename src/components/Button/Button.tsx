import React, { ReactNode } from "react";

import "./Button.styles.scss";

interface ButtonProps {
  children?: ReactNode;
  isGoogleSignIn?: boolean;
  inverted?: boolean;
  onClick?: any;
}

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

export default Button;
