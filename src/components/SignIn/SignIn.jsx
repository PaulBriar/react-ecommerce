import React from "react";

import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";

import { auth, signInWithGoogle } from "../../firebase/firebase";

import "./SignIn.styles.scss";

export default class SignIn extends React.Component {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = async e => {
    e.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = e => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            value={this.state.email}
            name="email"
            label="email"
            required
            handleChange={this.handleChange}
          />
          <FormInput
            type="password"
            value={this.state.password}
            name="password"
            label="password"
            required
            handleChange={this.handleChange}
          />
          <div className="buttons">
            <Button type="submit"> Sign In </Button>
            <Button onClick={signInWithGoogle} isGoogleSignIn>
              Sign In With Google
            </Button>
          </div>
        </form>
      </div>
    );
  }
}
