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

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import { selectCurrentUser } from "./redux/selectors/userSelector";
import { UserTypes, CurrentUserProps } from './utils/interfaces';


import "./App.css";


class App extends React.Component<CurrentUserProps> {
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
          <Footer />
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
