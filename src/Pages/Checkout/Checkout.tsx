import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import ErrorBoundary from 'react-error-boundary';

import { selectCartItems, selectCartTotal } from '../../redux/selectors/cartSelector';
import { CheckoutProps } from '../../utils/interfaces';

import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';

import './Checkout.styles.scss';

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
      <ErrorBoundary>
        {
          cartItems?.map(cartItem => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
          ))
        }
      </ErrorBoundary>
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