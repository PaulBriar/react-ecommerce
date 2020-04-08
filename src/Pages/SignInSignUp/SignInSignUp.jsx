import React from "react";
import ErrorBoundary from "react-error-boundary";

import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/SignUp/SignUp";

import "./SignInSignUp.styles.scss";

const SignInSignUp = () => {
  return (
    <div className="sign-in-sign-up">
      <ErrorBoundary>
        <SignIn />
      </ErrorBoundary>
      <ErrorBoundary>
        <SignUp />
      </ErrorBoundary>
    </div>
  );
};

export default SignInSignUp;
