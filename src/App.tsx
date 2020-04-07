import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/firebase";
import { connect } from "react-redux";
import { Dispatch } from 'redux';
import { setCurrentUser } from "./redux/actions/userActions";
import { createStructuredSelector } from "reselect";

import HomePage from "./Pages/HomePage/HomePage";
import Shop from "./Pages/Shop/Shop";
import SignInSignUp from "./Pages/SignInSignUp/SignInSignUp";
import Checkout from "./Pages/Checkout/Checkout";

import { selectCurrentUser } from "./redux/selectors/userSelector";
import { UserTypes } from './redux/constants';

import Header from "./components/Header/Header";

import "./App.css";

type currenUserProps = {
  setCurrentUser: Function,
  currentUser: Object
}

class App extends React.Component<currenUserProps> {
  unSubscribeFromAuth: Function = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={Shop} />
          <Route exact path="/checkout" component={Checkout} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInSignUp />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setCurrentUser: (user: UserTypes) => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
