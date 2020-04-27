import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { useToasts } from 'react-toast-notifications';

import { removeCartItem, reduceCartItemQuantity, addCartItem } from '../../redux/actions/cartActions';
import { CartItemTypes, CheckoutItemProps } from '../../utils/interfaces';

import './CheckoutItem.styles.scss';



const CheckoutItem = ({ cartItem, removeItem, addItem, reduceItem }: CheckoutItemProps) => {
  const { name, imageUrl, price, quantity } = cartItem

  const { addToast } = useToasts()

  const handleRemoveItem = (cartItem: CartItemTypes) => {
    removeItem(cartItem)
    addToast(`${cartItem.name} Has Been Removed`, { appearance: 'error', autoDismiss: true})
  }
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="checkout item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => reduceItem(cartItem)}>&#10094;</div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
      </span>
      <span className="price">${price}</span>
      <div className="remove-button" onClick={() => handleRemoveItem(cartItem)}>&#10005;</div>
    </div>
  )
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  removeItem: (cartItem: CartItemTypes) => dispatch(removeCartItem(cartItem)),
  addItem: (cartItem: CartItemTypes) => dispatch(addCartItem(cartItem)),
  reduceItem: (cartItem: CartItemTypes) => dispatch(reduceCartItemQuantity(cartItem))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);