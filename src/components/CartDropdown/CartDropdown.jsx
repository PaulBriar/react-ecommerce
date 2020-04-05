import React from "react";
import { connect } from "react-redux";

import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";

import "./CartDropdown.styles.scss";

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems
          ? cartItems.map(cartItem => (
              <CartItem key={cartItem.id} item={cartItem} />
            ))
          : null}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems
});

export default connect(mapStateToProps)(CartDropdown);
