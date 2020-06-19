import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import ErrorBoundary from "react-error-boundary";

import Cart from "../Cart/Cart";
import CartDropdown from "../CartDropdown/CartDropdown";
import { selectCartHidden } from "../../redux/selectors/cartSelector";
import { selectCurrentUser } from "../../redux/selectors/userSelector";

import "./Header.styles.scss";
import { ReactComponent as Logo } from "../../assets/images/crown.svg";

const Header = ({ currentUser, cartHidden }) => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          SHOP
        </Link>
        <Link to="/contact" className="option">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
          )}
      </div>
      <span className="cart">
          <Cart />
        </span>
      {cartHidden ? null : (
        <ErrorBoundary>
          <CartDropdown />
        </ErrorBoundary>
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  cartHidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
