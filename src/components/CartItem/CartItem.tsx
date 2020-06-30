import React from "react";

import { CartItemProps } from '../../utils/interfaces'

import "./CartItem.styles.scss";

const CartItem = ({ item: { imageUrl, price, name, quantity } }: CartItemProps) => {
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="cart item" className="item" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
