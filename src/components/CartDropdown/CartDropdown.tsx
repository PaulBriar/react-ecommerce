import React from "react";
import { connect } from "react-redux";
import { Dispatch } from 'redux';
import { createStructuredSelector } from "reselect";
import { withRouter } from 'react-router-dom';

import { selectCartItems } from "../../redux/selectors/cartSelector";
import { toggleCartHidden } from "../../redux/actions/cartActions";
import { CartDropdownProps } from '../../utils/interfaces';

import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";

import "./CartDropdown.styles.scss";

const CartDropdown = ({ cartItems, history, toggleCartHidden }: CartDropdownProps) => {

  const handleCheckoutClick = () => {
    history.push('/checkout');
    toggleCartHidden();
  }
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
            <span className="empty-message">Your Cart Is Empty</span>
          )}
      </div>
      <Button onClick={handleCheckoutClick}>GO TO CHECKOUT</Button>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));
