import React from "react";
import { connect } from "react-redux";
import { addCartItem } from "../../redux/actions/cartActions";

import Button from "../Button/Button";

import "./CategoryItem.styles.scss";

const CategoryItem = ({ item, addItem }) => {
  const { imageUrl, name, price } = item;
  return (
    <div className="category-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="category-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <Button onClick={() => addItem(item)} inverted>
        ADD TO CART
      </Button>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: cartItem => dispatch(addCartItem(cartItem))
});

export default connect(null, mapDispatchToProps)(CategoryItem);
