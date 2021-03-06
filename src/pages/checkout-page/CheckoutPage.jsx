import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckOutItems from "../../components/checkout-item/CheckOutItems";
import StripeBtn from "../../components/stripe-btn/StripeBtn";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selector";

import "./checkout.scss";

const CheckoutPage = ({ cartItems, total }) => (
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
    {cartItems.map((cartItems) => (
      <CheckOutItems key={cartItems.id} cartItem={cartItems} />
    ))}
    <div className="total">
      <span>Total: ${total}</span>
    </div>
    <div className="test-warning">
      *Please use the following test card for payments*
      <br />
      Card number: 4242 4242 4242 4242 <br /> CVC:123 <br /> ExpDate: 12/21
    </div>
    <StripeBtn price={total} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
