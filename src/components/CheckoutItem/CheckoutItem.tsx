import React from 'react';

import './CheckoutItem.styles.scss';

interface CheckoutItemProps {
  cartItem?: {
    name: string,
    imageUrl: string,
    price: string,
    quantity: string
  }
}

const CheckoutItem = ({ cartItem: { name, imageUrl, price, quantity } }: CheckoutItemProps) => {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="checkout item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <div className="remove-button">&#10005;</div>
    </div>
  )
};

export default CheckoutItem;