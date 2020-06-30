import React from "react";
import { connect } from "react-redux";
import { useToasts } from 'react-toast-notifications';

import { addCartItem } from "../../redux/actions/cartActions";

import { CategoryItemProps, CartItemTypes } from '../../utils/interfaces'

import Button from "../Button/Button";

import "./CategoryItem.styles.scss";

type HandleClickProps = {
    imageUrl: string,
    name: string,
    price: number
}

const CategoryItem = ({ item, addItem }: CategoryItemProps) => {
  const { imageUrl, name, price } = item;
  const { addToast } = useToasts()

  const handleClick = (item: HandleClickProps) => {
    addItem(item);
    addToast(`${name} Has Been Added To Your Cart`, { appearance: 'success', autoDismiss: true})
  }
  return (
    <div className="category-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="category-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <Button onClick={() => handleClick(item)} inverted>
        ADD TO CART
      </Button>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Function) => ({
  addItem: (cartItem: CartItemTypes) => dispatch(addCartItem(cartItem))
});

export default connect(null, mapDispatchToProps)(CategoryItem);
