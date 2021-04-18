import React from "react";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selector";
import CartItem from "../cart-item/CartItem";
import CustomBtn from "../custom-button/CustomBtn";

import "./cart.scss";

const CartDropdownMenu = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomBtn>CHECKOUT</CustomBtn>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropdownMenu);
