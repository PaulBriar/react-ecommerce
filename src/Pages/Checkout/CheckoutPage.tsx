import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import ErrorBoundary from 'react-error-boundary';
import PropTypes from 'prop-types';

import { selectCartItems, selectCartTotal } from '../../redux/selectors/cartSelector';
import { CheckoutProps } from '../../utils/interfaces';

import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';
import StripCheckoutButton from '../../components/StripeCheckoutButton/StripCheckoutButton';

import './CheckoutPage.styles.scss';

const CheckoutPage = ({ cartItems, total }: CheckoutProps) => {
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
      <StripCheckoutButton price={total} />
    </div>
  )
}

// const mapDispatchToProps = dispatch => ({})

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

CheckoutPage.propTypes = {
  cartItems: PropTypes.array.isRequired,
  total: PropTypes.number.isRequired
}

export default connect(mapStateToProps)(CheckoutPage);