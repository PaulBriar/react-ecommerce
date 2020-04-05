import React from "react";
import { connect } from "react-redux";

import { toggleCartHidden } from "../../redux/actions/cartActions";

import "./Cart.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/images/cart.svg";

const Cart = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = ({ cart: { cartItems } }) => ({
  itemCount: cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
