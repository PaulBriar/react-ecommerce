import React from "react";
import { connect } from "react-redux";
import { addCartItem } from "../../redux/actions/cartActions";

import Button from "../Button/Button";

import "./CollectionItem.styles.scss";

const CollectionItem = ({ item, addItem }) => {
  const { imageUrl, name, price } = item;
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
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

export default connect(null, mapDispatchToProps)(CollectionItem);
