import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/firebase";
import { connect } from "react-redux";
import { Dispatch } from 'redux';
import { setCurrentUser } from "./redux/actions/userActions";
import { createStructuredSelector } from "reselect";
import ErrorBoundary from 'react-error-boundary';
import { ToastProvider } from 'react-toast-notifications';

import HomePage from "./Pages/HomePage/HomePage";
import ShopPage from "./Pages/Shop/ShopPage";
import SignInSignUp from "./Pages/SignInSignUp/SignInSignUp";
import CheckoutPage from "./Pages/Checkout/CheckoutPage";

import { selectCurrentUser } from "./redux/selectors/userSelector";
import { UserTypes } from './utils/interfaces';

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
      <ToastProvider placement="bottom-center" autoDismissTimeout={3000}>
      <div className="App">
          <Header />
          <ErrorBoundary>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/shop" component={ShopPage} />
              <Route exact path="/checkout" component={CheckoutPage} />
              <Route
                exact
                path="/signin"
                render={() =>
                  this.props.currentUser ? <Redirect to="/" /> : <SignInSignUp />
                }
              />
            </Switch>
          </ErrorBoundary>
        </div>
      </ToastProvider>
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
