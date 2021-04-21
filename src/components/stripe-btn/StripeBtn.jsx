import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeBtn = ({ price }) => {
  // stripe accepts price amount in cents
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51IijeNEUuU1GW11TyafpMJWZ5BqjOxUmmUAoXKZYVsnd0Iy6cGwdUWkdKzqydrLEevkgPtOgLrMuhXVCDrO4Y6rp002N3RTTal";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="ecom-v1"
      billingAddress
      shippingAddress
      image="https://images.unsplash.com/photo-1560472355-536de3962603?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3wxNTYwNTYwOHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      description={`Your total is$${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeBtn;
