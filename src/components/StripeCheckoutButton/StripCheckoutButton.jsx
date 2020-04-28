import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import PropTypes from 'prop-types';

export default function StripCheckoutButton({ price }) {
  //Stripe requests price be in cents - i.e. $50 should be sent to stripe as 5000cents - Weird huh
  const priceForStrip = price * 100;
  const publishableKey = "pk_test_zwAlJJfaDUn9gzUcTgqjpEq100n8hBuphW";
  
  const onToken = token => {
    //Will be removed for prod
    console.log(token);
    alert("Payment Successful");
  }
  return (
    <StripeCheckout
      label={`Pay $${price} Now`}
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStrip}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  )
};

StripCheckoutButton.propTypes = {
  price: PropTypes.number.isRequired
}