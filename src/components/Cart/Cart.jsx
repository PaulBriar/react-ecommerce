import React from "react";
import { connect } from "react-redux";

import { toggleCartHidden } from "../../redux/actions/cartActions";

import "./Cart.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/images/cart.svg";

const Cart = ({ toggleCartHidden }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(null, mapDispatchToProps)(Cart);
