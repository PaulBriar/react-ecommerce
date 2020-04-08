import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartTotal } from '../../redux/selectors/cartSelector';

import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';

import './Checkout.styles.scss';

interface CheckoutProps {
  cartItems: {
    id: string,
    imageUrl: string,
    price: number,
    name: string,
    quantity: number
  }[];
  total: number;
}

const Checkout = ({ cartItems, total }: CheckoutProps) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {
        cartItems?.map(cartItem => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))
      }
      <div className="total">
        <span>Total: ${total}</span>
      </div>
    </div>
  )
}

// const mapDispatchToProps = dispatch => ({})

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps, null)(Checkout);